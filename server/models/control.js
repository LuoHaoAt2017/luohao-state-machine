const { Model } = require('sequelize');

module.exports = function(sequelize, Sequelize) {
  class Control extends Model {
    static associate(models) {
      Control.belongsTo(models.Schema, {
        foreignKey: 'schema_code',
      });
    }
  }

  Control.init({
    control_field: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    control_type: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    control_lable: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    control_value: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    control_visible: {
      type: Sequelize.DataTypes.BOOLEAN,
      allowNull: false,
    },
    control_display_rule: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize: sequelize,
    modelName: 'Control',
    tableName: 'Control',
    timestamps: true,
    createdAt: 'created_time',
    updatedAt: 'updated_time',
  });

  return Control;
}