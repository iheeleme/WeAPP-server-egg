'use strict';

const Controller = require('egg').Controller;

class DeptController extends Controller {
  /************  部门start ***************/

	// 部门列表
	async index() {
		const { ctx, app } = this;
		// const query = ctx.request.body
		const respone = await ctx.service.system.deptList();
		ctx.body = respone;
	}

	// 部门删除
	async destroy() {
		const { ctx, app } = this;
		const respone = await ctx.service.system.deptDoDelete();
		ctx.body = respone;
	}

	/************  部门end ***************/

}

module.exports = DeptController;
