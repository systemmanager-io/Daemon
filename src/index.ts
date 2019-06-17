// lib/app.ts
import express from 'express';
import routes from './routes/api'

import auth from "./middleware/auth";
import logo from "./assets/logo";
import {bootLog, daemonLog, httpLog, httpMiddlewareLog, infoLog} from "./helper/logger";
import checkForUpdates from "./helper/updater";

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
checkForUpdates();
infoLog("SystemManager Daemon Booting up");
infoLog("SystemManager is running in Portable mode");

// Create a new express application instance
const app: express.Application = express();


httpMiddlewareLog("Registering Auth Middleware");
app.use(auth);
httpMiddlewareLog("Auth Middleware registered");

httpLog("Registering Routes");
app.use(routes);
httpLog("Routes registered");


app.listen(3000, function () {
    infoLog("🚀 SystemManager Daemon Started");
    infoLog("🚀 Listening on :port");
});