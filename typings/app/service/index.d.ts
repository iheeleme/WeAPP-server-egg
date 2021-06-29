// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportCache = require('../../../app/service/cache');
import ExportIcon = require('../../../app/service/icon');
import ExportLogin = require('../../../app/service/login');
import ExportSystem = require('../../../app/service/system');

declare module 'egg' {
  interface IService {
    cache: AutoInstanceType<typeof ExportCache>;
    icon: AutoInstanceType<typeof ExportIcon>;
    login: AutoInstanceType<typeof ExportLogin>;
    system: AutoInstanceType<typeof ExportSystem>;
  }
}
