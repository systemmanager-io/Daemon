"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
function checkForUpdates() {
    //We enable the updaterLog to display an message
    logger_1.updaterLog.enabled = true;
    logger_1.updaterLog("+---------------------------------------+");
    logger_1.updaterLog("| SystemManager Daemon Update Available |");
    logger_1.updaterLog("+---------------------------------------+");
    //OR But i think the first one will be way more visible. but on the other hand the last one will allow to show the version number more easily.
    logger_1.updaterLog("New Update Available!");
    // Disable the updaterLog as we wont need it for a long time
    logger_1.updaterLog.enabled = false;
}
exports.default = checkForUpdates;
