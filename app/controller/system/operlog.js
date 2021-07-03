'use strict';

const Controller = require('egg').Controller;

class OpelogController extends Controller {
  async index() {
    const { ctx, app } = this;
		const query = ctx.request.query;
		const respone = await ctx.service.system.operList(query);
    // global.log.jsonResult = JSON.stringify(respone);
		ctx.body = respone;
    
  }
}

module.exports = OpelogController;
