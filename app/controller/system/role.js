'use strict'

const Controller = require('egg').Controller

class SystemController extends Controller {
	/************  角色start ***************/

	// 获取
	async show() {
		const { ctx, app } = this
		const id = ctx.params.id
		const respone = await ctx.service.system.getRoleData(id)
		ctx.body = respone
	}

	// 角色列表
	async index() {
		const { ctx, app } = this
		const respone = await ctx.service.system.roleList()
		global.log.jsonResult = JSON.stringify(respone)
		ctx.body = respone
	}

	async update() {
		const { ctx, app } = this
		const data = ctx.request.body
		const respone = await ctx.service.system.editDataScope(data)
		ctx.body = respone
	}
	/************  角色end ***************/
}

module.exports = SystemController
