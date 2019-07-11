import express from 'express';
import routes from './routes/api'

import auth from "./middleware/auth";
import logo from "./assets/logo";
import {
    bootLog,
    configLog,
    httpLog,
    httpMiddlewareLog,
    infoLog, portableModeInfoLog,
} from "./helper/logger";
import checkConfig, {PORT, PORTABLEMODE} from "./helper/config";
import * as schedule from "node-schedule"
import reportStatus from "./controllers/portableMode/pingController";


const bootLogo = true;


if (bootLogo) {
    bootLog(logo(3));
}
bootLog("+----------------------------------------------------+");
bootLog("|                                                    |");
bootLog("|          SystemManager Monitoring Software         |");
bootLog("|              https://systemmanager.io              |");
bootLog("|       Copyright© 2018 - 2019 Tigo Middelkoop       |");
bootLog("|                                                    |");
bootLog("|         Thank you for using SystemManager!         |");
bootLog("|                                                    |");
bootLog("+----------------------------------------------------+");
infoLog("SystemManager Daemon Booting up");

configLog("Loading config");
checkConfig();
configLog("Config loaded");

if (!PORTABLEMODE) {
// Create a new express application instance

    const app: express.Application = express();

    httpMiddlewareLog("Registering Middleware");
    app.use(auth);
    httpMiddlewareLog("Middleware registered");

    httpLog("Registering Routes");
    app.use(routes);
    httpLog("Routes registered");


    app.listen(PORT, function () {
        infoLog("🚀 SystemManager Daemon started");
        infoLog("🚀 Listening on", PORT);
    });

} else {
    portableModeInfoLog("Scheduling the status job for every 5 minutes");
    schedule.scheduleJob('*/5 * * * *', reportStatus);
    infoLog("🚀 SystemManager Daemon started in Portable Mode");
    reportStatus();
}