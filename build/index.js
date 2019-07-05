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
const updater_1 = __importDefault(require("./helper/updater"));
require("./config/config");
const config_1 = require("./config/config");
const bootLogo = true;
if (bootLogo) {
    logger_1.bootLog(logo_1.default(3));
}
logger_1.bootLog("+----------------------------------------------------+");
logger_1.bootLog("|                                                    |");
logger_1.bootLog("|          SystemManager Monitoring Software         |");
logger_1.bootLog("|              https://systemmanager.io              |");
logger_1.bootLog("|       Copyright© 2018 - 2019 Tigo Middelkoop       |");
logger_1.bootLog("|                                                    |");
logger_1.bootLog("|         Thank you for using SystemManager!         |");
logger_1.bootLog("|                                                    |");
logger_1.bootLog("+----------------------------------------------------+");
logger_1.bootLog("CURRENTKEY", process.env.AUTHKEY);
// if (authKey === undefined) {
//     errorLog("+----------------------------------------+")
//     errorLog("| There is no authKey defined in the env |")
//     errorLog("+----------------------------------------+")
//     process.exit()
// }
updater_1.default();
logger_1.infoLog("SystemManager Daemon Booting up");
logger_1.infoLog("SystemManager is running in Portable mode");
// Create a new express application instance
const app = express_1.default();
logger_1.httpMiddlewareLog("Registering Auth Middleware");
app.use(auth_1.default);
logger_1.httpMiddlewareLog("Auth Middleware registered");
logger_1.httpLog("Registering Routes");
app.use(api_1.default);
logger_1.httpLog("Routes registered");
app.listen(config_1.NETWORK_PORT, function () {
    logger_1.infoLog("🚀 SystemManager Daemon Started");
    logger_1.infoLog("🚀 Listening on", config_1.NETWORK_PORT);
});
