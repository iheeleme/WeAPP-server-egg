// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome = require('../../../app/controller/home');
import ExportSystem = require('../../../app/controller/system');

declare module 'egg' {
  interface IController {
    home: ExportHome;
    system: ExportSystem;
  }
}
