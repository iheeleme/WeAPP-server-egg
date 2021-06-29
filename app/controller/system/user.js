"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
	// 用户列表
	async index() {
		const { ctx, app } = this;
		const respone = await ctx.service.system.userList();
		ctx.body = respone;
	}
}

module.exports = UserController;
