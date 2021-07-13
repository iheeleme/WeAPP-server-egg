// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDept = require('../../../app/model/dept');
import ExportMenu = require('../../../app/model/menu');
import ExportNotice = require('../../../app/model/notice');
import ExportRole = require('../../../app/model/role');
import ExportSysConfig = require('../../../app/model/sys_config');
import ExportSysDictData = require('../../../app/model/sys_dict_data');
import ExportSysDictType = require('../../../app/model/sys_dict_type');
import ExportSysLogininfor = require('../../../app/model/sys_logininfor');
import ExportSysOperLog = require('../../../app/model/sys_oper_log');
import ExportSysPost = require('../../../app/model/sys_post');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Dept: ReturnType<typeof ExportDept>;
    Menu: ReturnType<typeof ExportMenu>;
    Notice: ReturnType<typeof ExportNotice>;
    Role: ReturnType<typeof ExportRole>;
    SysConfig: ReturnType<typeof ExportSysConfig>;
    SysDictData: ReturnType<typeof ExportSysDictData>;
    SysDictType: ReturnType<typeof ExportSysDictType>;
    SysLogininfor: ReturnType<typeof ExportSysLogininfor>;
    SysOperLog: ReturnType<typeof ExportSysOperLog>;
    SysPost: ReturnType<typeof ExportSysPost>;
    User: ReturnType<typeof ExportUser>;
  }
}
