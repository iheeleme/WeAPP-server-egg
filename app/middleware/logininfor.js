'use strict'
const parser = require('ua-parser-js')
module.exports = () => {
	return async function log(ctx, next) {
		if (ctx.request.path === '/api/login') {
			//排除非登录接口
			const User_Agent = ctx.get('User-Agent')
			const UA = parser(User_Agent)
			const ip = ctx.request.ip
			const ipAddress = ctx.helper.getIpAddr(ip)
			try {
				global.logininfor = {
					userName: ctx.request.body.username,
					ipaddr: ip,
					loginLocation: ipAddress,
					browser: UA.browser.name,
					os:  UA.os.name,
					status: '',
					msg: ''
				}
				await next()
				if (global.logininfor.msg) {
					ctx.model.SysLogininfor.create(global.logininfor)
				}
			} catch (error) {
				console.log('LogERROR:', error)
				this.ctx.body = {
					code: 50000,
					message: `LogERROR:${error}`
				}
			}
		} else {
			await next()
		}
	}
}
