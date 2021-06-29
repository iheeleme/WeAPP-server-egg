"use strict";

/** @type Egg.EggPlugin */
module.exports = {
	jwt: {
		enable: true,
		package: "egg-jwt",
	},
	// //mysql
	// mysql: {
	// 	enable: true,
	// 	package: "egg-mysql",
	// },
	cors: {
		enable: true,
		package: "egg-cors",
	},
	sequelize: {
		enable: true,
		package: "egg-sequelize",
	},

	redis: {
		enable: true,
		package: "egg-redis",
	},

	// had enabled by egg
	// static: {
	//   enable: true,
	// }
};
