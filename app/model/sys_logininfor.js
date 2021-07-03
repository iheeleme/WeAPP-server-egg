/* indent size: 2 */

module.exports = app => {
  const DataTypes = app.Sequelize;

  const Model = app.model.define('sys_logininfor', {
    infoId: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      field:'info_id'
    },
    userName: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '',
      field:'user_name'
    },
    ipaddr: {
      type: DataTypes.STRING(128),
      allowNull: true,
      defaultValue: ''
    },
    loginLocation: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: '',
      field:'login_location'
    },
    browser: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    os: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    status: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: '0'
    },
    msg: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    loginTime: {
      type: DataTypes.DATE,
      allowNull: true,
      field: "login_time",
    }
  }, {
    tableName: 'sys_logininfor',
    timestamps: true,
    createdAt: "loginTime",
    updatedAt: false,
  });

  Model.associate = function() {

  }

  return Model;
};
