'use strict'

const Controller = require('egg').Controller

class PostController extends Controller {
	async index() {
		const { ctx, app } = this
		const query = ctx.request.body
		const respone = await ctx.service.system.postgetList(query)
		// global.log.jsonResult = JSON.stringify(respone)
		ctx.body = respone
	}
    async update() {
		const { ctx, app } = this
		const query = ctx.request.body
		const respone = await ctx.service.system.postUpdate(query)
		// global.log.jsonResult = JSON.stringify(respone)
		ctx.body = respone
	}
    async create() {
		const { ctx, app } = this
		const query = ctx.request.body
		const respone = await ctx.service.system.postCreate(query)
		// global.log.jsonResult = JSON.stringify(respone)
		ctx.body = respone
	}
    async destroy() {
		const { ctx, app } = this
		const query = ctx.params.id
		const respone = await ctx.service.system.postDelete(query)
		// global.log.jsonResult = JSON.stringify(respone)
		ctx.body = respone
	}
}

module.exports = PostController
