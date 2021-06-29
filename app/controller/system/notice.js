'use strict';

const Controller = require('egg').Controller;

class NoticeController extends Controller {
  /************  公告start ***************/

	// 公告列表
	async index() {
		const { ctx, app } = this;
		const query = ctx.request.query;
        console.log(query)
		const respone = await ctx.service.system.noticeList(query);
		ctx.body = respone;
	}
	// 公告编辑
	async update() {
		const { ctx, app } = this;
		const query = ctx.request.body;
		const respone = await ctx.service.system.noticeDoEdit(query);
		ctx.body = respone;
	}
	// 删除公告
	async destroy() {
		const { ctx, app } = this;
		const id = this.ctx.params.id;
		const respone = await ctx.service.system.noticeDoDelete(id);
		ctx.body = respone;
	}

	/************  公告end ***************/
}

module.exports = NoticeController;
