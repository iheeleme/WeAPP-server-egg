// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAuth = require('../../../app/middleware/auth');
import ExportErrorHandler = require('../../../app/middleware/error_handler');
import ExportLogOper = require('../../../app/middleware/log_oper');

declare module 'egg' {
  interface IMiddleware {
    auth: typeof ExportAuth;
    errorHandler: typeof ExportErrorHandler;
    logOper: typeof ExportLogOper;
  }
}
