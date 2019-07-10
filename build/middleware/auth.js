"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../helper/logger");
const config_1 = require("../helper/config");
function authMiddleware(req, res, next) {
    logger_1.httpMiddlewareAuthLog("Authenticating with token");
    let authHeader = req.header('Authorization');
    if (authHeader == undefined || authHeader == null) {
        res.send({ error: 'Authorization header missing' }).status(403);
        return;
    }
    if (authHeader == config_1.AUTHKEY) {
        next();
        return;
    }
    res.send({ error: "Authorization key is wrong" });
}
exports.default = authMiddleware;
