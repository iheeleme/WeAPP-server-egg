/* indent size: 2 */

module.exports = (app) => {
	const DataTypes = app.Sequelize;

	const Model = app.model.define(
		"sys_notice",
		{
			noticeId: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				field: "notice_id",
			},
			noticeTitle: {
				type: DataTypes.STRING(50),
				allowNull: false,
				field: "notice_title",
			},
			noticeType: {
				type: DataTypes.CHAR(1),
				allowNull: false,
				field: "notice_type",
			},
			noticeContent: {
				type: "LONGBLOB",
				allowNull: true,
				field: "notice_content",
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
				type: DataTypes.STRING(255),
				allowNull: true,
			},
		},
		{
			// 不要忘记启用时间戳！
			timestamps: true,
			createdAt: "create_time",
			updatedAt: "update_time",
			freezeTableName: true,
		}
	);

	Model.associate = function () {};

	return Model;
};
