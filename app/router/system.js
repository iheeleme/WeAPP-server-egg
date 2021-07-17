module.exports = (app) => {
	const { router, controller } = app;
	const jwt = app.middleware.auth(app.config.jwt);

	router.resources('getTree', '/api/menuManagement/getTree',jwt, controller.system.role);

	// role
	router.resources('roleManagement', '/api/roleManagement',jwt, controller.system.role);

	// menu
	router.resources('menuManagement', '/api/menuManagement',jwt, controller.system.menu);

	// user
	router.resources('userManagement', '/api/userManagement',jwt, controller.system.user);


	router.get("/api/getRouters", jwt, controller.system.getRouters);
	router.post("/api/icon/getList", jwt, controller.system.iconList);

	// noticeManage
	router.resources('noticeManage', '/api/noticeManagement',jwt, controller.system.notice);

	// deptManage
	router.resources('deptManagement', '/api/deptManagement',jwt, controller.system.dept);

	// dict
	router.resources('dictType','/api/dictManagement/type',jwt,controller.system.dict)
	router.resources('dictType','/api/dictManagement/data',jwt,controller.system.dictData)


	// log 
	router.resources('logManagement','/api/logManagement',jwt,controller.system.operlog)

	// post 
	router.resources('postManagement','/api/postManagement',jwt,controller.system.post)

	// config
	router.resources('configManagement','/api/configManagement',jwt,controller.system.config)


};
