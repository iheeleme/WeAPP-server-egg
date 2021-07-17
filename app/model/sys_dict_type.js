/* indent size: 2 */

module.exports = app => {
	const DataTypes = app.Sequelize

	const Model = app.model.define(
		'sys_dict_type',
		{
			dictId: {
				type: DataTypes.BIGINT,
				primaryKey: true,
				field: 'dict_id'
			},
			dictName: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: '',
				field: 'dict_name'
			},
			dictType: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: '',
				unique: true,
				field: 'dict_type'
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
			createTime: {
				type: DataTypes.DATE,
				allowNull: true,
				field: 'create_time'
			},
			update_by: {
				type: DataTypes.STRING(64),
				allowNull: true,
				defaultValue: ''
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
			tableName: 'sys_dict_type',
			timestamps: true,
			createdAt: 'createTime',
			updatedAt: 'updateTime'
		}
	)

	Model.associate = function () {}

	return Model
}
