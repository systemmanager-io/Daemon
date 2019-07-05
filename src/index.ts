// lib/app.ts
import express from 'express';
import routes from './routes/api'

import auth from "./middleware/auth";
import logo from "./assets/logo";
import {bootLog, daemonLog, errorLog, httpLog, httpMiddlewareLog, infoLog} from "./helper/logger";
import checkForUpdates from "./helper/updater";
import "./config/config";
import {NETWORK_PORT} from "./config/config";


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
bootLog("CURRENTKEY", process.env.AUTHKEY);
// if (authKey === undefined) {
//     errorLog("+----------------------------------------+")
//     errorLog("| There is no authKey defined in the env |")
//     errorLog("+----------------------------------------+")
//     process.exit()
// }
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


app.listen(NETWORK_PORT, function () {
    infoLog("🚀 SystemManager Daemon Started");
    infoLog("🚀 Listening on", NETWORK_PORT);
});