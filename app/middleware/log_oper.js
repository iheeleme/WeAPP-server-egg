'use strict'
module.exports = () => {
	return async function log(ctx, next) {
		if (ctx.request.path !== '/auth/login/web') {
			//排除登录接口
			const type = ctx.request.method
			const arr = ctx.request.url.split('/')
			const ip = ctx.request.ip
			const ipAddress = ctx.helper.getIpAddr(ip)
			console.log(ipAddress)
			const model = arr[2]
			try {
				global.log = {
					title: model,
					businessType: type,
					method: type,
					requestMethod: type,
					operIp: ip,
					operLocation: ipAddress,
					operName: 'admin', //另外一个中间件，将当前用户信息存在了ctx.user下
					jsonResult: null
				}
				await next()
				if (global.log.jsonResult) {
					const { method, title } = global.log
					let model = '',
						type = ''
					switch (title) {
						case 'ferry':
							model = '实时监控'
							break
						case 'area':
							model = '区域管理'
							break
						default:
							model = '用户管理'
					}
					switch (
						method // （1：查看 2：创建 3：修改 4：删除）
					) {
						case 'GET':
							type = 1
							break
						case 'POST':
							type = 2
							break
						case 'PUT':
							type = 3
							break
						default:
							type = 4
					}
					global.log.title = model
					global.log.businessType = type
					ctx.model.SysOperLog.create(global.log)
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
