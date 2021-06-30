"use strict";

const Service = require("egg").Service;

class LoginService extends Service {
	async login(data) {
		const result = await this.ctx.model.User.findAll({
			where: {
				userName: data.username,
			},
			attributes: ["password"],
		});
        console.log(result[0].password)
        if(data.password===result[0].password){
            return true
        }else{
            return false
        }
	}
    async token(data,user){
        const { ctx, app } = this;
        let token=data
        const result = await this.ctx.model.User.findAll({
            where:{
                userName:user
            }
        })
        const unTime =app.jwt.verify(token, this.config.jwt.secret).exp-app.jwt.verify(token, this.config.jwt.secret).iat
        await this.ctx.service.cache.set(app.jwt.verify(token, this.config.jwt.secret).token_id,result,unTime);
    }
}

module.exports = LoginService;
