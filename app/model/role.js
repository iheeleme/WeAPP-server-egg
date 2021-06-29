/* indent size: 2 */

module.exports = (app) => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define(
		"sys_role",
		{
			roleId: {
				type: DataTypes.BIGINT,
				allowNull: false,
				primaryKey: true,
				field: "role_id",
			},
			roleName: {
				type: DataTypes.STRING(30),
				allowNull: false,
				field: "role_name",
			},
			roleKey: {
				type: DataTypes.STRING(100),
				allowNull: false,
				field: "role_key",
			},
			roleSort: {
				type: DataTypes.INTEGER,
				allowNull: false,
				field: "role_sort",
			},
			dataScope: {
				type: DataTypes.CHAR(1),
				allowNull: true,
				defaultValue: "1",
				field: "data_scope",
			},
			menuCheckStrictly: {
				type: DataTypes.INTEGER(1),
				allowNull: true,
				defaultValue: "1",
				field: "menu_check_strictly",
			},
			dept_check_strictly: {
				type: DataTypes.INTEGER(1),
				allowNull: true,
				defaultValue: "1",
			},
			status: {
				type: DataTypes.CHAR(1),
				allowNull: false,
			},
			del_flag: {
				type: DataTypes.CHAR(1),
				allowNull: true,
				defaultValue: "0",
			},
			create_by: {
				type: DataTypes.STRING(64),
				allowNull: true,
				defaultValue: "",
			},
			create_time: {
				type: DataTypes.DATE,
				allowNull: true,
			},
			update_by: {
				type: DataTypes.STRING(64),
				allowNull: true,
				defaultValue: "",
			},
			update_time: {
				type: DataTypes.DATE,
				allowNull: true,
			},
			remark: {
				type: DataTypes.STRING(500),
				allowNull: true,
			},
		},
		{
			// 不要忘记启用时间戳！
			timestamps: true,
			createdAt: "create_time",
			updatedAt: "update_time",
			tableName: "sys_role",
		}
	);

	Model.associate = function () {};

	return Model;
};
