/* indent size: 2 */

module.exports = (app) => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define(
		"sys_dept",
		{
			deptId: {
				type: DataTypes.BIGINT,
				primaryKey: true,
				field: "dept_id",
			},
			parentId: {
				type: DataTypes.BIGINT,
				allowNull: true,
				defaultValue: "0",
				field: "parent_id",
			},
			ancestors: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: "",
			},
			deptName: {
				type: DataTypes.STRING(30),
				allowNull: true,
				defaultValue: "",
				field: "dept_name",
			},
			orderNum: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: "0",
				field: "order_num",
			},
			leader: {
				type: DataTypes.STRING(20),
				allowNull: true,
			},
			phone: {
				type: DataTypes.STRING(11),
				allowNull: true,
			},
			email: {
				type: DataTypes.STRING(50),
				allowNull: true,
			},
			status: {
				type: DataTypes.CHAR(1),
				allowNull: true,
				defaultValue: "0",
			},
			delFlag: {
				type: DataTypes.CHAR(1),
				allowNull: true,
				defaultValue: "0",
				field: "del_flag",
			},
			create_by: {
				type: DataTypes.STRING(64),
				allowNull: true,
				defaultValue: "",
			},
			createTime: {
				type: DataTypes.DATE,
				allowNull: true,
				field: "create_time",
			},
			update_by: {
				type: DataTypes.STRING(64),
				allowNull: true,
				defaultValue: "",
			},
			updateTime: {
				type: DataTypes.DATE,
				allowNull: true,
				field: "update_time",
			},
		},
		{
			// 不要忘记启用时间戳！
			timestamps: true,
			createdAt: "createTime",
			updatedAt: "updateTime",
			freezeTableName: true,
		}
	);

	Model.associate = function () {};

	return Model;
};
