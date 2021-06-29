"use strict";

const Controller = require("egg").Controller;

class SystemController extends Controller {
	async getRouters() {
		const { ctx, app } = this;
		const respone = await ctx.service.system.getRouters();
		ctx.body = respone;
	}
	// 获取
	async role() {
		const { ctx, app } = this;
		const respone = await ctx.service.system.roleList();
		ctx.body = respone;
	}
	// 公告列表
	async noticeList() {
		const { ctx, app } = this;
		const query = ctx.request.body;
		const respone = await ctx.service.system.noticeList(query);
		ctx.body = respone;
	}
	// 公告编辑
	async noticeDoEdit() {
		const { ctx, app } = this;
		const query = ctx.request.body;
		const respone = await ctx.service.system.noticeDoEdit(query);
		ctx.body = respone;
	}
	// 删除公告
	async noticeDoDelete() {
		const { ctx, app } = this;
		const query = ctx.request.body;
		const respone = await ctx.service.system.noticeDoDelete(query);
		ctx.body = respone;
	}
	// 角色列表
	async roleList() {
		const { ctx, app } = this;
		const respone = await ctx.service.system.roleList();
		ctx.body = respone;
	}
	// 菜单列表
	async menuList() {
		const { ctx, app } = this;
		const respone = await ctx.service.system.menuList();
		ctx.body = respone;
	}
	// 菜单删除
	async menuDoDelete() {
		const { ctx, app } = this;
		const data = ctx.request.body;
		const respone = await ctx.service.system.menuDoDelete(data);
		ctx.body = respone;
	}
	// 菜单新增
	async menuDoAdd() {
		const { ctx, app } = this;
		const data = ctx.request.body;
		const respone = await ctx.service.system.menuDoAdd(data);
		ctx.body = respone;
	}
	// 菜单修改
	async menuDoEdit() {
		const { ctx, app } = this;
		const data = ctx.request.body;
		const respone = await ctx.service.system.menuDoEdit(data);
		ctx.body = respone;
	}
	// 图标列表
	async iconList() {
		const { ctx, app } = this;
		ctx.body = await ctx.service.icon.iconList();
	}
	// 用户列表
	async userList() {
		const { ctx, app } = this;
		const respone = await ctx.service.system.userList();
		ctx.body = respone;
	}
}

module.exports = SystemController;
