module.exports = (app) => {
	const { router, controller } = app;
	const jwt = app.middleware.auth(app.config.jwt);

	router.resources('getTree', '/api/menuManagement/getTree',jwt, controller.system.role);

	// role
	router.resources('editDataScope', '/api/roleManagement/dataScope',jwt, controller.system.role);
	router.resources('getList', '/api/roleManagement/getList',jwt, controller.system.role);
	router.resources('getRoleData', '/api/roleManagement/role',jwt, controller.system.role);
	// router.post("/roleManagement/getList", jwt, controller.system.roleList);
	// router.post("/menuManagement/getTree", jwt, controller.system.role);

	// menu
	router.resources('menuList', '/api/menuManagement/getList',jwt, controller.system.menu);
	router.resources('getMenu', '/api/menuManagement/getMenu',jwt, controller.system.menu);
	router.resources('menuDoDelete', '/api/menuManagement/doDelete',jwt, controller.system.menu);
	router.resources('menuDoEdit', '/api/menuManagement/doEdit',jwt, controller.system.menu);
	router.resources('menuDoAdd', '/api/menuManagement/doAdd',jwt, controller.system.menu);
	// router.post("/menuManagement/doDelete", jwt, controller.system.menuDoDelete);
	// router.get("/menuManagement/getList", jwt, controller.system.menuList);
	// router.post("/menuManagement/doEdit", jwt, controller.system.menuDoEdit);
	// router.post("/menuManagement/doAdd", jwt, controller.system.menuDoAdd);

	// user
	// router.post("/userManagement/getList", jwt, controller.system.userList);
	router.resources('userList', '/api/userManagement/getList',jwt, controller.system.user);
	router.resources('userDoDelete', '/api/userManagement/doDelete',jwt, controller.system.user);
	router.resources('userDoEdit', '/api/userManagement/doEdit',jwt, controller.system.user);
	router.resources('userDoAdd', '/api/userManagement/doAdd',jwt, controller.system.user);
	router.resources('resetUserPwd', '/api/userManagement/reset/',jwt, controller.system.user);



	router.get("/api/getRouters", jwt, controller.system.getRouters);
	router.post("/api/icon/getList", jwt, controller.system.iconList);

	// noticeManage
	router.resources('noticeList', '/api/noticeManagement/getList',jwt, controller.system.notice);
	router.resources('noticeDoEdit', '/api/noticeManagement/doEdit',jwt, controller.system.notice);
	router.resources('noticeDoDelete', '/api/noticeManagement/doDelete',jwt, controller.system.notice);
	// router.post("/noticeManagement/getList", jwt, controller.system.noticeList);
	// router.post("/noticeManagement/doEdit", jwt, controller.system.noticeDoEdit);
	// router.post("/noticeManagement/doDelete", jwt, controller.system.noticeDoDelete);

	// deptManage
	router.resources('deptList', '/api/deptManagement/getList',jwt, controller.system.dept);
	router.resources('deptDoDelete', '/api/deptManagement/doDelete',jwt, controller.system.dept);
	router.resources('deptDoEdit', '/api/deptManagement/doEdit',jwt, controller.system.dept);
	router.resources('deptDoAdd', '/api/deptManagement/doAdd',jwt, controller.system.dept);

	// router.post("/deptManagement/getList", jwt, controller.system.deptList);
	// router.post("/deptManagement/doDelete", jwt, controller.system.deptDoDelete);

	// dict
	router.resources('dictType','/api/system/dict/type',jwt,controller.system.dict)


	// log 
	router.resources('operList','/api/logManagement/operList',jwt,controller.system.operlog)
	router.resources('delOperlog','/api/logManagement/operlog',jwt,controller.system.operlog)
	router.resources('loginList','/api/logManagement/loginList',jwt,controller.system.logininfor)
	router.resources('dellogininfo','/api/logManagement/logininfor',jwt,controller.system.logininfor)


	// post 
	router.resources('postList','/api/postManagement/getList',jwt,controller.system.post)

};
