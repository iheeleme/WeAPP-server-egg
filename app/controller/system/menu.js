"use strict";

const Controller = require("egg").Controller;

class SystemController extends Controller {
	/************  菜单start ***************/

    // 菜单查询
	async show() {
		const { ctx, app } = this;
        const id =this.ctx.params.id
		const respone = await ctx.service.system.getMenu(id);
        global.log.jsonResult = JSON.stringify(respone);
		ctx.body = respone;
	}

	// 菜单列表
	async index() {
		const { ctx, app } = this;
		const respone = await ctx.service.system.menuList();
        global.log.jsonResult = JSON.stringify(respone);
		ctx.body = respone;
	}
	// 菜单删除
	async destroy() {
		const { ctx, app } = this;
        const ids = this.ctx.params.id;
		const respone = await ctx.service.system.menuDoDelete(ids);
        global.log.jsonResult = JSON.stringify(respone);
		ctx.body = respone;
	}
	// 菜单新增
	async create() {
		const { ctx, app } = this;
		const data = ctx.request.body;
		const respone = await ctx.service.system.menuDoAdd(data);
        global.log.jsonResult = JSON.stringify(respone);
		ctx.body = respone;
	}
	// 菜单修改
	async update() {
		const { ctx, app } = this;
		const data = ctx.request.body;
		const respone = await ctx.service.system.menuDoEdit(data);
        global.log.jsonResult = JSON.stringify(respone);
		ctx.body = respone;
	}

	/************  菜单end ***************/
}


module.exports = SystemController;
