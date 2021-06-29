module.exports = (app) => {
	const { router, controller } = app;
	const jwt = app.middleware.auth(app.config.jwt);
	router.post("/menuManagement/getTree", jwt, controller.system.role);
	router.post("/menu/navigate", jwt, controller.system.menuList);
	router.post("/menuManagement/doDelete", jwt, controller.system.menuDoDelete);
	router.get("/menuManagement/getList", jwt, controller.system.menuList);
	router.post("/icon/getList", jwt, controller.system.iconList);
	router.post("/menuManagement/doEdit", jwt, controller.system.menuDoEdit);
	router.post("/menuManagement/doAdd", jwt, controller.system.menuDoAdd);
	router.post("/userManagement/getList", jwt, controller.system.userList);
	router.post("/roleManagement/getList", jwt, controller.system.roleList);
	router.get("/getRouters", jwt, controller.system.getRouters);
	router.post("/noticeManagement/getList", jwt, controller.system.noticeList);
	router.post("/noticeManagement/doEdit", jwt, controller.system.noticeDoEdit);
	router.post("/noticeManagement/doDelete", jwt, controller.system.noticeDoDelete);
};
