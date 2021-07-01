/* indent size: 2 */

module.exports = (app) => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define(
		"sys_oper_log",
		{
			operId: {
				type: DataTypes.BIGINT,
				primaryKey: true,
				field: "oper_id",
			},
			title: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: "",
			},
			businessType: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: "0",
				field: "business_type",
			},
			method: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: "",
			},
			requestMethod: {
				type: DataTypes.STRING(10),
				allowNull: true,
				defaultValue: "",
				field: "request_method",
			},
			operatorType: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: "0",
				field: "operator_type",
			},
			operName: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: "",
				field: "oper_name",
			},
			deptName: {
				type: DataTypes.STRING(50),
				allowNull: true,
				defaultValue: "",
				field: "dept_name",
			},
			operUrl: {
				type: DataTypes.STRING(255),
				allowNull: true,
				defaultValue: "",
				field: "oper_url",
			},
			operIp: {
				type: DataTypes.STRING(128),
				allowNull: true,
				defaultValue: "",
				field: "oper_ip",
			},
			operLocation: {
				type: DataTypes.STRING(255),
				allowNull: true,
				defaultValue: "",
				field: "oper_location",
			},
			operParam: {
				type: DataTypes.STRING(2000),
				allowNull: true,
				defaultValue: "",
				field: "oper_param",
			},
			jsonResult: {
				type: DataTypes.STRING(2000),
				allowNull: true,
				defaultValue: "",
				field: "json_result",
			},
			status: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: "0",
			},
			errorMsg: {
				type: DataTypes.STRING(2000),
				allowNull: true,
				defaultValue: "",
				field: "error_msg",
			},
			operTime: {
				type: DataTypes.DATE,
				allowNull: true,
				field: "oper_time",
			},
		},
		{
			tableName: "sys_oper_log",
			// 不要忘记启用时间戳！
			timestamps: true,
			createdAt: "operTime",
			updatedAt: false,
		}
	);

	Model.associate = function () {};

	return Model;
};
