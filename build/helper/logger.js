"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const config_1 = require("../config/config");
exports.daemonLog = debug_1.default('systemmanager');
exports.infoLog = exports.daemonLog.extend('info');
exports.errorLog = exports.daemonLog.extend('error');
exports.bootLog = exports.daemonLog.extend('boot');
exports.updaterLog = exports.daemonLog.extend('updater');
exports.configLog = exports.daemonLog.extend('config');
exports.httpLog = exports.daemonLog.extend('http');
exports.httpMiddlewareLog = exports.httpLog.extend('middleware');
exports.httpMiddlewareAuthLog = exports.httpMiddlewareLog.extend('auth');
/*
    Default Logging in the application.
    You can disable stuff in here. But this is not advertised!

    I know the bootLog is not much of use now. BUT it will be responsible for version controlling! So if you dont want to be missing updates DONT TURN IT OFF.
 */
exports.bootLog.enabled = true;
exports.infoLog.enabled = true;
exports.errorLog.enabled = true;
/*
    Advanced logging when debug setting has been set.

    There are 3 Modes (4 If you count the default one)
    1. Basic
    2. Advanced
    3. SHIT GO CRAZY (This will log EVERYTHING in the app, even the dependencies)
 */
if (config_1.debugLevel == 2 || config_1.nodeEnv == "local") {
    exports.httpLog.enabled = true;
    exports.httpMiddlewareLog.enabled = false;
    exports.httpMiddlewareAuthLog.enabled = true;
}
/*
    Last note: There are loggers (such as the Updater), that only will be activated for certain events. In the updaters case the updater wil disable itself after it has logged its neccesary things
 */ 
