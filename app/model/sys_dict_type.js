/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('sys_dict_type', {
    dict_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    dict_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ''
    },
    dict_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: '',
      unique: true
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: '0'
    },
    create_by: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: ''
    },
    create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_by: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: ''
    },
    update_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    remark: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'sys_dict_type'
  });

  Model.associate = function() {

  }

  return Model;
};
