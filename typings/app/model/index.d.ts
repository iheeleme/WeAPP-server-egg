// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDept = require('../../../app/model/dept');
import ExportMenu = require('../../../app/model/menu');
import ExportNotice = require('../../../app/model/notice');
import ExportRole = require('../../../app/model/role');
import ExportSysDictData = require('../../../app/model/sys_dict_data');
import ExportSysDictType = require('../../../app/model/sys_dict_type');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Dept: ReturnType<typeof ExportDept>;
    Menu: ReturnType<typeof ExportMenu>;
    Notice: ReturnType<typeof ExportNotice>;
    Role: ReturnType<typeof ExportRole>;
    SysDictData: ReturnType<typeof ExportSysDictData>;
    SysDictType: ReturnType<typeof ExportSysDictType>;
    User: ReturnType<typeof ExportUser>;
  }
}
