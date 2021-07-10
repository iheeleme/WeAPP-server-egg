/* indent size: 2 */

module.exports = app => {
	const DataTypes = app.Sequelize

	const Model = app.model.define(
		'sys_post',
		{
			postId: {
				type: DataTypes.BIGINT,
				primaryKey: true,
				field: 'post_id'
			},
			postCode: {
				type: DataTypes.STRING(64),
				allowNull: false,
				field: 'post_code'
			},
			postName: {
				type: DataTypes.STRING(50),
				allowNull: false,
				field: 'post_name'
			},
			postSort: {
				type: DataTypes.INTEGER,
				allowNull: false,
				field: 'post_sort'
			},
			status: {
				type: DataTypes.CHAR(1),
				allowNull: false
			},
			create_by: {
				type: DataTypes.STRING(64),
				allowNull: true,
				defaultValue: ''
			},
			createTime: {
				type: DataTypes.DATE,
				allowNull: true,
        field:'create_time'
			},
			update_by: {
				type: DataTypes.STRING(64),
				allowNull: true,
				defaultValue: ''
			},
			updateTime: {
				type: DataTypes.DATE,
				allowNull: true,
        field:'update_time'
			},
			remark: {
				type: DataTypes.STRING(500),
				allowNull: true
			}
		},
		{
			tableName: 'sys_post',
			timestamps: true,
			createdAt: 'createTime',
			updatedAt: 'updateTime'
		}
	)

	Model.associate = function () {}

	return Model
}
