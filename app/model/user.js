"use strict";

module.exports = (app) => {
	const { STRING, INTEGER, DATE, BIGINT, CHAR } = app.Sequelize;
	const User = app.model.define(
		"sys_user",
		{
			userId: { type: BIGINT, field: "user_id", primaryKey: true },
			deptId: { type: BIGINT, field: "dept_id" },
			userName: { type: STRING(30), field: "user_name" },
			nickName: { type: STRING(30), field: "nick_name" },
			userType: { type: STRING(2), field: "user_type" },
			email: STRING(50),
			phonenumber: STRING(11),
			sex: CHAR(1),
			avatar: STRING(100),
			password: STRING(100),
			status: CHAR(1),
			del_flag: CHAR(1),
			login_ip: STRING(128),
			loginDate: { type: DATE, field: "login_date" },
			create_by: STRING(60),
			update_by: STRING(60),
			remark: STRING(500),
			createTime: { type: DATE, field: "create_time" },
			updateTime: { type: DATE, field: "update_time" },
		},
		{
			// 不要忘记启用时间戳！
			timestamps: true,
			createdAt: "create_time",
			updatedAt: "update_time",
			freezeTableName: true,
		}
	);
	return User;
};
