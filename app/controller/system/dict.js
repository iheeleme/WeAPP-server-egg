'use strict';

const Controller = require('egg').Controller;

class DictController extends Controller {
  async show() {
    const { ctx, app } = this;
    const type = this.ctx.params.id;
    const respone = await ctx.service.system.getDict(type);
    ctx.body = respone;
  }
  async index() {
    const { ctx, app } = this;
    const type = this.ctx.params.id;
    const respone = await ctx.service.system.dictList();
    ctx.body = respone;
  }
  async destroy() {
    const { ctx, app } = this;
    const id = this.ctx.params.id;
    const respone = await ctx.service.system.dictTypeDestroy(id);
    ctx.body = respone;
  }
  async update() {
    const { ctx, app } = this;
    const data = ctx.request.body;
    const respone = await ctx.service.system.dictTypeUpdate(data);
    ctx.body = respone;
  }
  async create() {
		const { ctx, app } = this
		const data = ctx.request.body
		const respone = await ctx.service.system.dictTypeCreate(data)
		ctx.body = respone
	}
}

module.exports = DictController;
