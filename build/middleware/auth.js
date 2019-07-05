"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../helper/logger");
function authMiddleware(req, res, next) {
    logger_1.httpMiddlewareAuthLog("Authenticating with token");
    next();
}
exports.default = authMiddleware;
