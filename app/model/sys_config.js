/* indent size: 2 */

module.exports = app => {
	const DataTypes = app.Sequelize

	const Model = app.model.define(
		'sys_config',
		{
			configId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				field: 'config_id'
			},
			configName: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: '',
				field: 'config_name'
			},
			configKey: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: '',
				field: 'config_key'
			},
			configValue: {
				type: DataTypes.STRING(500),
				allowNull: true,
				defaultValue: '',
				field: 'config_value'
			},
			configType: {
				type: DataTypes.CHAR(1),
				allowNull: true,
				defaultValue: 'N',
				field: 'config_type'
			},
			createBy: {
				type: DataTypes.STRING(64),
				allowNull: true,
				defaultValue: '',
				field: 'create_by'
			},
			createTime: {
				type: DataTypes.DATE,
				allowNull: true,
				field: 'create_time'
			},
			updateBy: {
				type: DataTypes.STRING(64),
				allowNull: true,
				defaultValue: '',
				field: 'update_by'
			},
			updateTime: {
				type: DataTypes.DATE,
				allowNull: true,
				field: 'update_time'
			},
			remark: {
				type: DataTypes.STRING(500),
				allowNull: true
			}
		},
		{
			tableName: 'sys_config',
			timestamps: true,
			createdAt: 'createTime',
			updatedAt: 'updateTime'
		}
	)

	Model.associate = function () {}

	return Model
}
