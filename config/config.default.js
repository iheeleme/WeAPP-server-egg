/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = (exports = {});

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + "_1622471759745_5963";

	// add your middleware config here
	config.middleware = [];

	// add your user config here
	const userConfig = {
		// myAppName: 'egg',
	};
	config.jwt = {
		//jwt配置项
		secret: "123",
    // ignore: [ '/publicKey', '/public/' ], // 哪些请求不需要认证
	};

	config.security = {
		csrf: {
			enable: false,
			ignoreJSON: true,
		},
		// domainWhiteList: ["http://localhost:1024"], //允许访问接口的白名单
	};
	config.cors = {
		origin: "*",
		allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
	};

	exports.validate = {
		enable: true,
		package: "egg-validate",
	};

	// config.mysql = {
	// 	//database configuration
	// 	client: {
	// 		//host
	// 		host: "localhost",
	// 		//port
	// 		port: "3306",
	// 		//username
	// 		user: "ruoyi",
	// 		//password
	// 		password: "ruoyi",
	// 		//database
	// 		database: "ry-vue",
	// 	},
	// 	//load into app,default is open //加载到应用程序，默认为打开
	// 	app: true,
	// 	//load into agent,default is close //加载到代理中，默认值为“关闭”
	// 	agent: false,
	// };
	// 添加mysql的配置项
	config.sequelize = {
		// 数据库类型
		dialect: "mysql",

		host: "localhost",
		//port
		port: "3306",
		//username
		username: "ruoyi",
		//password
		password: "ruoyi",
		//database
		database: "test",
		// 设置时区为东8区
		timezone: "+08:00",
	};
	config.logger = {
		level: "DEBUG",
		outputJSON: true,
		encoding: "utf-8",
		consoleLevel: "DEBUG",
	};
	config.redis = {
		client: {
			port: 6379,
			host: "127.0.0.1",
			password: "songweiwei",
			db: 0,
		},
	};
  // exports.middleware = ['auth'];
  config.routerAuth = ['/login']
	return {
		...config,
		...userConfig,
	};
};
