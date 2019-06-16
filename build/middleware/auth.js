"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authMiddleware(req, res, next) {
    console.log("LOGGED");
    next();
}
exports.default = authMiddleware;
