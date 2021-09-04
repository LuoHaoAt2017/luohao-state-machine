const { Model } = require('sequelize');

module.exports = function(sequelize, Sequelize) {
  class Schema extends Model {
    static associate(models) {
      Schema.belongsTo(models.Application, {
        foreignKey: 'app_code',
        as: 'Application'
      });

      Schema.hasMany(models.Control);
    }
  }

  Schema.init({
    schema_code: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    schema_name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize: sequelize,
    modelName: 'Schema',
    tableName: 'Schema',
    timestamps: true,
    createdAt: 'created_time',
    updatedAt: 'updated_time',
  });

  return Schema;
}