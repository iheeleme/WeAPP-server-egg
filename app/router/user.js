module.exports = (app) => {
	const { router, controller } = app;
  const jwt = app.middleware.auth(app.config.jwt);
  router.post("/publicKey",controller.home.publicKey);
  router.post("/login", controller.home.login);
	router.post("/admin", jwt, controller.home.index);
	router.post("/userInfo", jwt, controller.home.userInfo);
};
