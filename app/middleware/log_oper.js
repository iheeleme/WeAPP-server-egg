'use strict'
module.exports = () => {
	return async function log(ctx, next) {
		if (ctx.request.path !== '/auth/login/web') {
			//排除登录接口
			const type = ctx.request.method
			const arr = ctx.request.url.split('/')
			const ip = ctx.request.ip
			const ipAddress = ctx.helper.getIpAddr(ip)
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
					switch (arr[2]) {
						case 'menuManagement':
							model = '菜单管理'
							break
						case 'userManagement':
							model = '用户管理'
							break
						case 'noticeManagement':
							model = '公告管理'
							break
						case 'deptManagement':
							model = '部门管理'
							break
						case 'logManagement':
							model = '日志管理'
							break
						case 'roleManagement':
							model = '角色管理'
							break
					}
					console.log(arr,title,model,'123')
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
