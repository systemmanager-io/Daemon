"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const logger_1 = require("./logger");
function checkConfig() {
    const fileExists = fs.existsSync(__dirname + "/../config/config.json");
    if (!fileExists) {
        logger_1.errorLog.enabled = true;
        logger_1.errorLog("+------------------------------------------+");
        logger_1.errorLog("| Config file does not exist, creating now |");
        logger_1.errorLog("+------------------------------------------+");
        process.exit();
    }
}
exports.default = checkConfig;
function loadConfig() {
    checkConfig();
    const config = fs.readFileSync(__dirname + "/../config/config.json");
    const parsedConfig = JSON.parse(config);
    return parsedConfig;
}
exports.loadConfig = loadConfig;
//Network related config
exports.PORT = loadConfig().network.port;
exports.BIND = loadConfig().network.bind;
//Autht
exports.AUTHKEY = loadConfig().panel.authKey;
exports.PANELURL = loadConfig().portableMode.url;
exports.PORTABLEMODE = loadConfig().portableMode.portableMode;
