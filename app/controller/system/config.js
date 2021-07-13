'use strict'

const Controller = require('egg').Controller

class ConfigController extends Controller {
	async index() {
		const { ctx, app } = this
		// const query = ctx.request.body
		const respone = await ctx.service.system.configList()
		ctx.body = respone
	}
    async update() {
		const { ctx, app } = this
		const query = ctx.request.body
		const respone = await ctx.service.system.configUpdate(query)
		ctx.body = respone
	}
    async create() {
		const { ctx, app } = this
		const query = ctx.request.body
		const respone = await ctx.service.system.configCreate(query)
		ctx.body = respone
	}
    async destroy() {
		const { ctx, app } = this
		const query = ctx.params.id
		const respone = await ctx.service.system.configDelete(query)
		ctx.body = respone
	}
}

module.exports = ConfigController
