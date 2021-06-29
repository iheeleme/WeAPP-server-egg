// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMenu = require('../../../app/model/menu');
import ExportNotice = require('../../../app/model/notice');
import ExportRole = require('../../../app/model/role');
import ExportUser = require('../../../app/model/user');

declare module 'egg' {
  interface IModel {
    Menu: ReturnType<typeof ExportMenu>;
    Notice: ReturnType<typeof ExportNotice>;
    Role: ReturnType<typeof ExportRole>;
    User: ReturnType<typeof ExportUser>;
  }
}
