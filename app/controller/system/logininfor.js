'use strict'

const Controller = require('egg').Controller

class LogininforController extends Controller {
	async index() {
		const { ctx, app } = this
		const query = ctx.request.query
		const respone = await ctx.service.system.loginList(query)
		// global.log.jsonResult = JSON.stringify(respone);
		ctx.body = respone
	}
}

module.exports = LogininforController
