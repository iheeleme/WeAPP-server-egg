module.exports = (options) => {
	return async function auth(ctx, next) {
		const token = ctx.request.header.authorization;
		if (token) {
			try {
				// 解码token
				const token_id = ctx.app.jwt.verify(token, options.secret).token_id;
				let t = await ctx.service.cache.get(token_id);
				if (!t) {
					ctx.status = 401;
					ctx.body = {
						message: "Token 令牌不合法!",
					};
					return;
				} else {
					ctx.authUser = t;
					ctx.tokenId=token_id
					await next();
				}
			} catch (error) {
				if (error.message=='jwt expired') {
					ctx.status = 402;
					ctx.body = {
						message: error.message,
					};
					return;
				} else {
					ctx.status = 500;
					ctx.body = {
						message: error.message,
					};
					return;
				}
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
