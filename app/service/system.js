"use strict";
const Service = require("egg").Service;
const _ = require("lodash");
const Op = require("sequelize").Op;
const sequelize = require("sequelize");
class SystemService extends Service {
	// 获取路由
	async getRouters() {
		let result = "";
		if (true) {
			result = await this.ctx.model.Menu.findAll({
				attributes: [
					"menuName",
					"menuType",
					"menuId",
					"parentId",
					"path",
					"component",
					"icon",
				],
				where: {
					menuType: {
						[Op.ne]: "F",
					},
				},
			});
		} else {
			result = await this.ctx.model.Menu.findAll();
		}
		result = JSON.parse(JSON.stringify(result));
		let data = menuFn(0, result);
		return {
			code: 200,
			msg: "success",
			data: data,
		};
	}

	/************  公告start ***************/

	// 公告列表
	async noticeList(query) {
		const { count, rows } = await this.ctx.model.Notice.findAndCountAll({
			attributes: [
				["notice_id", "noticeId"],
				["notice_title", "noticeTitle"],
				["notice_type", "noticeType"],
				"status",
				"create_time",
				"create_by",
				[
					sequelize.cast(sequelize.col("notice_content"), "char"),
					"noticeContent",
				],
			],

			offset: Number(query.pageNo) - 1,
			limit: Number(query.pageSize),
		});
		// console.log(rows)
		// result = JSON.parse(JSON.stringify(rows));
		return {
			code: 200,
			msg: "success",
			data: rows,
			totalCount: count,
		};
	}

	// 公告编辑
	async noticeDoEdit(query) {
		let result;
		if (query.noticeId) {
			result = await this.ctx.model.Notice.update(query, {
				where: {
					noticeId: query.noticeId,
				},
			});
		} else {
			result = await this.ctx.model.Notice.create(query);
		}
		if (result) {
			return {
				code: 200,
				msg: "success",
			};
		} else {
			return {
				code: 300,
				msg: "error",
			};
		}
	}
	// 公告删除
	async noticeDoDelete(id) {
		let result;
		if (id) {
			result = await this.ctx.model.Notice.destroy({
				where: {
					noticeId: id,
				},
			});
		} else {
			result = false;
		}
		if (result) {
			return {
				code: 200,
				msg: "success",
			};
		} else {
			return {
				code: 300,
				msg: "error",
			};
		}
	}

	/************  公告end ***************/

	/************  菜单start ***************/

	// 菜单列表
	async menuList() {
		const menus = await this
			.getMenus
			// this.ctx.admin.roleIds,
			// this.ctx.admin.username === "admin"
			();
		if (!_.isEmpty()) {
			menus.forEach((e) => {
				const parentMenu = menus.filter((m) => {
					e.parentId = parseInt(e.parentId);
					if (e.parentId == m.id) {
						return m.name;
					}
				});
				if (!_.isEmpty(parentMenu)) {
					e.parentName = parentMenu[0].name;
				}
			});
		}
		return {
			code: 200,
			msg: "success",
			data: menus,
		};
	}
	// 菜单删除
	async menuDoEdit(data) {
		console.log(data);
		// const result= await this.app.mysql.delete('sys_menu',{
		// 	menu_id:data
		// });
		// const updateSuccess = result.affectedRows === 1;
		// if(updateSuccess){
		// 	return{
		// 		code:200,
		// 		msg:'修改成功'
		// 	}
		// }
	}

	async menuDoAdd(data) {
		const result = await this.ctx.model.Menu.create(data);
		console.log(result);
		if (result) {
			return {
				code: 200,
				msg: "添加成功",
			};
		}
	}

	// 获取菜单
	async getMenus(roleIds, isAdmin) {
		return await this.ctx.model.Menu.findAll();

		return await this.app.mysql.query(`
            SELECT
                a.*
            FROM
                sys_menu a JOIN sys_role_menu b on a.menu_id = b.menu_id AND b.role_id
            GROUP BY a.menu_id
            ORDER BY
            order_num ASC`);
	}

	/************  菜单end ***************/

	/************  角色start ***************/

	// 删除角色
	async menuDoDelete(ids) {
		const result = await this.ctx.model.Menu.destroy({
			where: {
				menuId: ids,
			},
		});

		if (result) {
			return {
				code: 200,
				msg: "删除成功",
			};
		}
	}
	// 角色列表
	async roleList() {
		if (true) {
			return {
				code: 200,
				msg: "success",
				data: await this.ctx.model.Role.findAll(),
			};
		}
	}

	/************  角色end ***************/

	/************  部门start ***************/
	// 部门列表
	async deptList(query) {
		const  data  = await this.ctx.model.Dept.findAll();
		return {
			code: 200,
			msg: "success",
			data: data,
		};
	}
	/************  部门end ***************/

	async userList() {
		const result = await this.ctx.model.User.findAll();
		return {
			code: 200,
			msg: "success",
			data: result,
		};
	}
}

module.exports = SystemService;
function menuFn(id, data, key) {
	var routers = [];
	if (data.length > 0) {
		data.forEach((elem) => {
			if (elem.parentId == id) {
				if (hasChild(elem.menuId, data)) {
					if (!elem["component"]) {
						elem["component"] = "Layout";
					}
					elem["hidden"] = false;
					elem["redirect"] = "noRedirect";
					elem["alwaysShow"] = true;
					elem["name"] = getRoutersName(elem["path"]);
					elem["meta"] = {
						title: elem["menuName"],
						icon: elem["icon"],
					};
					elem["children"] = parentAll(elem.menuId, data);
					routers.push(elem);
				}
			}
		});
		// console.log(routers);
		return routers;
	}
}
// id菜单下所有子路由
function parentAll(id, data) {
	let arr = [];
	if (data.length > 0) {
		data.forEach((element) => {
			if (element.parentId == id) {
				if (!element["component"]) {
					element["component"] = "Layout";
				}
				element["name"] = getRoutersName(element["path"], element);
				element["hidden"] = false;
				element["meta"] = {
					title: element["menuName"],
					icon: element["icon"],
				};
				if (hasChild(element.menuId, data)) {
					element["alwaysShow"] = true;
					element["children"] = parentAll(element.menuId, data);
				}
				arr.push(element);
			}
		});
		return arr;
	}
}
// 是否含有子路由
function hasChild(id, data) {
	let is = false;
	if (data.length > 0) {
		for (let i = 0; i < data.length; i++) {
			if (data[i].parentId == id) {
				is = true;
				return is;
			}
		}
	}
}

function getRoutersName(name, data) {
	if (name) {
		return name.replace(name[0], name[0].toUpperCase());
	}
}
