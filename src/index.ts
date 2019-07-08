// lib/app.ts
import express from 'express';
import routes from './routes/api'

import auth from "./middleware/auth";
import logo from "./assets/logo";
import {
    bootLog,
    configLog, errorLog,
    httpLog,
    httpMiddlewareLog,
    infoLog,
    portableModeLog
} from "./helper/logger";
import checkConfig, {AUTHKEY, PORT, PORTABLEMODE} from "./helper/config";
import * as schedule from "node-schedule"
import pingPanel from "./controllers/portableMode/pingPanelController";


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
    infoLog("=============================================");
    infoLog("SystemManager Daemon is running in portable mode");
    infoLog("Some stuff is also not available, just yet (such as RAM usage, CPU usage in the panel");
    infoLog("The panel will check on it own if an device pinged in the last 5 minutes, otherwise it will be marked as offline");
    infoLog("=============================================");

    infoLog("Scheduling the status job for every 5 minutes");
    schedule.scheduleJob('*/5 * * * *', pingPanel);
    infoLog("🚀 SystemManager Daemon started in Portable Mode");
}