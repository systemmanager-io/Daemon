"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
//
const daemonLog = debug_1.default('systemmanager');
//Daemon Log
exports.infoLog = daemonLog.extend('info');
exports.errorLog = daemonLog.extend('error');
exports.bootLog = daemonLog.extend('boot');
exports.updaterLog = daemonLog.extend('updater');
// PortableMode Log
const portableModeLog = daemonLog.extend('portableMode');
exports.portableModeInfoLog = portableModeLog.extend('info');
exports.portableModeErrorLog = portableModeLog.extend('error');
// Config Log
exports.configLog = daemonLog.extend('config');
// HTTP Log
exports.httpLog = daemonLog.extend('http');
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
exports.configLog.enabled = true;
// Enable the portable mode logger when portablemode is turned on
exports.portableModeInfoLog.enabled = true;
exports.portableModeErrorLog.enabled = true;
/*
    Advanced logging when debug setting has been set.

    There are 3 Modes (4 If you count the default one)
    1. Basic
    2. Advanced
    3. SHIT GO CRAZY (This will log EVERYTHING in the app, even the dependencies)
 */
if (2 == 2 || "local" == "local") {
    exports.httpLog.enabled = true;
    exports.httpMiddlewareLog.enabled = false;
    exports.httpMiddlewareAuthLog.enabled = true;
}
/*
    Last note: There are loggers (such as the Updater), that only will be activated for certain events. In the updaters case the updater wil disable itself after it has logged its neccesary things
 */ 
