// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportSystem = require('../../../app/controller/system');
import ExportSystemDept = require('../../../app/controller/system/dept');
import ExportSystemMenu = require('../../../app/controller/system/menu');
import ExportSystemNotice = require('../../../app/controller/system/notice');
import ExportSystemRole = require('../../../app/controller/system/role');
import ExportSystemUser = require('../../../app/controller/system/user');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    system: ExportSystem & {
      dept: ExportSystemDept;
      menu: ExportSystemMenu;
      notice: ExportSystemNotice;
      role: ExportSystemRole;
      user: ExportSystemUser;
    }
  }
}
