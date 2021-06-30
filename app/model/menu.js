"use strict";

module.exports = (app) => {
	const { STRING, INTEGER, DATE, BIGINT, CHAR } = app.Sequelize;
	const Menu = app.model.define(
		"sys_menu",
		{
			menuId: { type: BIGINT, field: "menu_id", primaryKey: true },
			parentId: { type: BIGINT, field: "parent_id" },
			menuName: { type: STRING(50), field: "menu_name" },
			orderNum: { type: INTEGER, field: "order_num" },
			path: STRING(200),
			component: STRING,
			isFrame: { type: INTEGER, field: "is_frame" },
			isCache: { type: INTEGER, field: "is_cache" },
			menuType: { type: CHAR(1), field: "menu_type" },
			visible: CHAR(1),
			status: CHAR(1),
			perms: STRING(100),
			icon: STRING(100),
			create_by: STRING(60),
			update_by: STRING(60),
			remark: STRING(500),
			createTime: {
				type: DATE,
				allowNull: true,
				field: "create_time",
			},
			updateTime: {
				type: DATE,
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
	return Menu;
};
