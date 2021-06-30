module.exports = (app) => {
	const { router, controller } = app;
	const jwt = app.middleware.auth(app.config.jwt);

	router.resources('getTree', '/menuManagement/getTree',jwt, controller.system.role);
	router.resources('getList', '/roleManagement/getList',jwt, controller.system.role);
	// router.post("/roleManagement/getList", jwt, controller.system.roleList);
	// router.post("/menuManagement/getTree", jwt, controller.system.role);

	// menu
	router.resources('menuList', '/menuManagement/getList',jwt, controller.system.menu);
	router.resources('getMenu', '/menuManagement/getMenu',jwt, controller.system.menu);
	router.resources('menuDoDelete', '/menuManagement/doDelete',jwt, controller.system.menu);
	router.resources('menuDoEdit', '/menuManagement/doEdit',jwt, controller.system.menu);
	router.resources('menuDoAdd', '/menuManagement/doAdd',jwt, controller.system.menu);
	// router.post("/menuManagement/doDelete", jwt, controller.system.menuDoDelete);
	// router.get("/menuManagement/getList", jwt, controller.system.menuList);
	// router.post("/menuManagement/doEdit", jwt, controller.system.menuDoEdit);
	// router.post("/menuManagement/doAdd", jwt, controller.system.menuDoAdd);

	// user
	// router.post("/userManagement/getList", jwt, controller.system.userList);
	router.resources('userList', '/userManagement/getList',jwt, controller.system.user);

	router.get("/getRouters", jwt, controller.system.getRouters);
	router.post("/icon/getList", jwt, controller.system.iconList);

	// noticeManage
	router.resources('noticeList', '/noticeManagement/getList',jwt, controller.system.notice);
	router.resources('noticeDoEdit', '/noticeManagement/doEdit',jwt, controller.system.notice);
	router.resources('noticeDoDelete', '/noticeManagement/doDelete',jwt, controller.system.notice);
	// router.post("/noticeManagement/getList", jwt, controller.system.noticeList);
	// router.post("/noticeManagement/doEdit", jwt, controller.system.noticeDoEdit);
	// router.post("/noticeManagement/doDelete", jwt, controller.system.noticeDoDelete);

	// deptManage
	router.resources('deptList', '/deptManagement/getList',jwt, controller.system.dept);
	router.resources('deptDoDelete', '/deptManagement/doDelete',jwt, controller.system.dept);
	router.resources('deptDoEdit', '/deptManagement/doEdit',jwt, controller.system.dept);
	router.resources('deptDoAdd', '/deptManagement/doAdd',jwt, controller.system.dept);

	// router.post("/deptManagement/getList", jwt, controller.system.deptList);
	// router.post("/deptManagement/doDelete", jwt, controller.system.deptDoDelete);

	// dict
	router.resources('dictType','/system/dict/type',jwt,controller.system.dict)
};
