'use strict';

const Controller = require('egg').Controller;

class DictController extends Controller {
  async show() {
    const { ctx, app } = this;
    const type = this.ctx.params.id;
    const respone = await ctx.service.system.getDicts(type);
    ctx.body = respone;
  }
}

module.exports = DictController;
