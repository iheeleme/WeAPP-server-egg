module.exports = (app) => {
	const { router, controller } = app;
  const jwt = app.middleware.auth(app.config.jwt);
  router.post("/api/publicKey",controller.home.publicKey);
  router.post("/api/login", controller.home.login);
	router.post("/api/admin", jwt, controller.home.index);
	router.post("/api/userInfo", jwt, controller.home.userInfo);
};
