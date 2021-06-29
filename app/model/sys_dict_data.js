/* indent size: 2 */

module.exports = (app) => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define(
		"sys_dict_data",
		{
			dictCode: {
				type: DataTypes.BIGINT,
				primaryKey: true,
				field: "dict_code",
			},
			dictSort: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: "0",
				field: "dict_sort",
			},
			dictLabel: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: "",
				field: "dict_label",
			},
			dictValue: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: "",
				field: "dict_value",
			},
			dictType: {
				type: DataTypes.STRING(100),
				allowNull: true,
				defaultValue: "",
				field: "dict_type",
			},
			cssClass: {
				type: DataTypes.STRING(100),
				allowNull: true,
				field: "css_class",
			},
			listClass: {
				type: DataTypes.STRING(100),
				allowNull: true,
				field: "list_class",
			},
			isDefault: {
				type: DataTypes.CHAR(1),
				allowNull: true,
				defaultValue: "N",
				field: "is_default",
			},
			status: {
				type: DataTypes.CHAR(1),
				allowNull: true,
				defaultValue: "0",
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
			remark: {
				type: DataTypes.STRING(500),
				allowNull: true,
			},
		},
		{
			// 不要忘记启用时间戳！
			timestamps: true,
			createdAt: "createTime",
			updatedAt: "updateTime",
			tableName: "sys_dict_data",
		}
	);

	Model.associate = function () {};

	return Model;
};
