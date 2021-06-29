"use strict";

const Controller = require("egg").Controller;

class SystemController extends Controller {
	async getRouters() {
		const { ctx, app } = this;
		const respone = await ctx.service.system.getRouters();
		ctx.body = respone;
	}
	// 图标列表
	async iconList() {
		const { ctx, app } = this;
		ctx.body = await ctx.service.icon.iconList();
	}	
}

module.exports = SystemController;
