"use strict";

const Controller = require("egg").Controller;

class SystemController extends Controller {

    /************  角色start ***************/

    // // 获取
	// async () {
	// 	const { ctx, app } = this;
	// 	const respone = await ctx.service.system.roleList();
	// 	ctx.body = respone;
	// }

	// 角色列表
	async index() {
		const { ctx, app } = this;
		const respone = await ctx.service.system.roleList();
		ctx.body = respone;
	}
	/************  角色end ***************/

}

module.exports = SystemController;