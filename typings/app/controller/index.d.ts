// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportSystem = require('../../../app/controller/system');
import ExportSystemDept = require('../../../app/controller/system/dept');
import ExportSystemDict = require('../../../app/controller/system/dict');
import ExportSystemLogininfor = require('../../../app/controller/system/logininfor');
import ExportSystemMenu = require('../../../app/controller/system/menu');
import ExportSystemNotice = require('../../../app/controller/system/notice');
import ExportSystemOperlog = require('../../../app/controller/system/operlog');
import ExportSystemPost = require('../../../app/controller/system/post');
import ExportSystemRole = require('../../../app/controller/system/role');
import ExportSystemUser = require('../../../app/controller/system/user');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    system: ExportSystem & {
      dept: ExportSystemDept;
      dict: ExportSystemDict;
      logininfor: ExportSystemLogininfor;
      menu: ExportSystemMenu;
      notice: ExportSystemNotice;
      operlog: ExportSystemOperlog;
      post: ExportSystemPost;
      role: ExportSystemRole;
      user: ExportSystemUser;
    }
  }
}
