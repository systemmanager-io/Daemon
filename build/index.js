"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// lib/app.ts
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const auth_1 = __importDefault(require("./middleware/auth"));
const logo_1 = __importDefault(require("./assets/logo"));
const logger_1 = require("./helper/logger");
console.log(logo_1.default(3));
console.log("====================================================");
console.log("");
console.log("SystemManager Monitoring Software");
console.log("V0.1 Alpha");
console.log("");
console.log("====================================================");
// Create a new express application instance
const app = express_1.default();
logger_1.httpMiddlewareLog("Registering Auth Middleware");
app.use(auth_1.default);
logger_1.httpMiddlewareLog("Auth Middleware registered");
logger_1.httpLog("Registering Routes");
app.use(api_1.default);
logger_1.httpLog("Routes Registered");
app.listen(3000, function () {
    console.log('SystemManager started!', 'Listening on port 3000');
});
