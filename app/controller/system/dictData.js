'use strict'

const Controller = require('egg').Controller

class DictDataController extends Controller {
	async show() {
		const { ctx, app } = this
		const type = this.ctx.params.id
		const respone = await ctx.service.system.getDicts(type)
		ctx.body = respone
	}
	async destroy() {
		const { ctx, app } = this
		const id = this.ctx.params.id
		const respone = await ctx.service.system.dictDataDestroy(id)
		ctx.body = respone
	}
	async index() {
		const { ctx, app } = this
		const data = ctx.request.query
		const respone = await ctx.service.system.dictDataList(data)
		ctx.body = respone
	}
	async update() {
		const { ctx, app } = this
		const data = ctx.request.body
		const respone = await ctx.service.system.dictDataUpdate(data)
		ctx.body = respone
	}
    async create() {
		const { ctx, app } = this
		const data = ctx.request.body
		const respone = await ctx.service.system.dictDataCreate(data)
		ctx.body = respone
	}
}

module.exports = DictDataController
