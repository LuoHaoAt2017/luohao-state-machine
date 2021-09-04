const { Model } = require('sequelize');

module.exports = function(sequelize, Sequelize) {
  class Application extends Model {
    static associate(models) {
      Application.hasMany(models.Schema, {
        as: 'schemas'
      });
    }
  }

  Application.init({
    app_code: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    app_name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    app_info: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize: sequelize,
    modelName: 'Application',
    tableName: 'Application',
    timestamps: true,
    createdAt: 'created_time',
    updatedAt: 'updated_time',
  });

  return Application;
}