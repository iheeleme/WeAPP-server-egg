const { v4: uuidv4 } = require('uuid')
const ipdb = require('ipip-ipdb')
const _ = require('lodash')
module.exports = {
	uuid() {
		return uuidv4()
	},
	getIpAddr(ip) {
		try {
			const bst = new ipdb.BaseStation(`${this.ctx.app.baseDir}/app/public/ipipfree.ipdb`)
			const result = bst.findInfo(ip, 'CN')
			const addArr = []
			if (result) {
				addArr.push(result.countryName)
				addArr.push(result.regionName)
				addArr.push(result.cityName)
				return _.uniq(addArr).join('')
			}
		} catch (err) {
			return '无法获取地址信息'
		}
	}
}
