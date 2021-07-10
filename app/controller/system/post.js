'use strict'

const Controller = require('egg').Controller

class PostController extends Controller {
	async index() {
		const { ctx, app } = this
		const query = this.ctx.body
		const respone = await ctx.service.system.postgetList(query)
		// global.log.jsonResult = JSON.stringify(respone)
		ctx.body = respone
	}
}

module.exports = PostController
