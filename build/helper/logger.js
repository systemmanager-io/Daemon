"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
exports.daemonLog = debug_1.default('systemmanager');
exports.httpLog = exports.daemonLog.extend('http');
exports.httpMiddlewareLog = exports.httpLog.extend('middleware');
