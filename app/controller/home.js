"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
	async index() {
		const { ctx } = this;
		ctx.body = "hi, egg";
	}
	async login() {
		const { ctx, app } = this;

		//获取用户端传递过来的参数
		const data = ctx.request.body;
		const status = await ctx.service.login.login(data);
		if (!status) {
			ctx.body = { code: 201, msg: "账号或密码错误" };
			return;
		}
		// 进行验证 data 数据 登录是否成功
		// .........
		//成功过后进行一下操作

		//生成 token 的方式
		const token = app.jwt.sign(
			{
				token_id: ctx.helper.uuid(), //需要存储的 token 数据
				//......
				exp: Math.floor(Date.now() / 1000) + 60 * 60,
			},
			app.config.jwt.secret
		);
    
    ctx.service.login.token(token,data.username)

		// 返回 token 到前端
		ctx.body = { code: 200, msg: "success", data: { token } };
	}
	async index() {
		const { ctx, app } = this;

		console.log(ctx.state.user);
		/*
		 * 打印内容为：{ username : 'admin', iat: 1560346903 }
		 * iat 为过期时间，可以单独写中间件验证，这里不做细究
		 * 除了 iat 之后，其余的为当时存储的数据
		 **/

		ctx.body = { code: 0, msg: "验证成功" };
	}
	async publicKey() {
		const { ctx, app } = this;
		ctx.body = {
			code: 200,
			msg: "success",
			data: {
				mockServer: true,
				publicKey:
					"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBT2vr+dhZElF73FJ6xiP181txKWUSNLPQQlid6DUJhGAOZblluafIdLmnUyKE8mMHhT3R+Ib3ssZcJku6Hn72yHYj/qPkCGFv0eFo7G+GJfDIUeDyalBN0QsuiE/XzPHJBuJDfRArOiWvH0BXOv5kpeXSXM8yTt5Na1jAYSiQ/wIDAQAB",
			},
		};
	}
	async userInfo() {
		const { ctx, app } = this;
		let permissions = ["admin"];
		let username = "admin";
		ctx.body = {
			code: 200,
			msg: "success",
			data: {
				permissions,
				username,
				"avatar|1": [
					"https://i.gtimg.cn/club/item/face/img/2/15922_100.gif",
					"https://i.gtimg.cn/club/item/face/img/8/15918_100.gif",
				],
			},
		};
	}
}

module.exports = HomeController;
