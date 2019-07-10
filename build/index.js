"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const auth_1 = __importDefault(require("./middleware/auth"));
const logo_1 = __importDefault(require("./assets/logo"));
const logger_1 = require("./helper/logger");
const config_1 = __importStar(require("./helper/config"));
const schedule = __importStar(require("node-schedule"));
const pingController_1 = __importDefault(require("./controllers/portableMode/pingController"));
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
logger_1.infoLog("SystemManager Daemon Booting up");
logger_1.configLog("Loading config");
config_1.default();
logger_1.configLog("Config loaded");
if (!config_1.PORTABLEMODE) {
    // Create a new express application instance
    const app = express_1.default();
    logger_1.httpMiddlewareLog("Registering Middleware");
    app.use(auth_1.default);
    logger_1.httpMiddlewareLog("Middleware registered");
    logger_1.httpLog("Registering Routes");
    app.use(api_1.default);
    logger_1.httpLog("Routes registered");
    app.listen(config_1.PORT, function () {
        logger_1.infoLog("🚀 SystemManager Daemon started");
        logger_1.infoLog("🚀 Listening on", config_1.PORT);
    });
}
else {
    pingController_1.default();
    logger_1.portableModeInfoLog("Scheduling the status job for every 5 minutes");
    schedule.scheduleJob('*/5 * * * *', pingController_1.default);
    logger_1.infoLog("🚀 SystemManager Daemon started in Portable Mode");
}
