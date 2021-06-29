module.exports = (options) => {
	return async function auth(ctx, next) {
		const token = ctx.request.header.authorization;
		 if (token) {
			try {
				// 解码token
				const token_id = ctx.app.jwt.verify(token, options.secret).token_id;
				let t = await ctx.service.cache.get(token_id);
				if (!t) {
					ctx.throw(401, "Token 令牌不合法!");
				} else {
          ctx.authUser = t
					await next();
				}
			} catch (error) {
				ctx.status = 401;
				ctx.body = {
					message: error.message,
				};
				return;
			}
		} else {
			ctx.status = 401;
			ctx.body = {
				message: "没有token",
			};
			return;
		}
	};
};
