"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
	// 用户列表
	async index() {
		const { ctx, app } = this;
		const respone = await ctx.service.system.userList();
		ctx.body = respone;
	}
    // 用户修改
	async update() {
		const { ctx, app } = this;
		const data = ctx.request.body;
		const respone = await ctx.service.system.userDoEdit(data);
		ctx.body = respone;
	}
    // 用户删除
	async destroy() {
		const { ctx, app } = this;
        const id = this.ctx.params.id
		const respone = await ctx.service.system.userDoDelete(id);
		ctx.body = respone;
	}
     // 用户创建
	async create() {
		const { ctx, app } = this;
        const data = ctx.request.body
		const respone = await ctx.service.system.userDoAdd(data);
		ctx.body = respone;
	}

         // 重置密码
	async edit() {
		const { ctx, app } = this;
        const data = this.ctx.query
        const id =this.ctx.params.id
		const respone = await ctx.service.system.resetUserPwd(id,data);
		ctx.body = respone;
	}
}

module.exports = UserController;
