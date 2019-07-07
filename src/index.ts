// lib/app.ts
import express from 'express';
import routes from './routes/api'

import auth from "./middleware/auth";
import logo from "./assets/logo";
import {bootLog, configLog, daemonLog, errorLog, httpLog, httpMiddlewareLog, infoLog} from "./helper/logger";
import checkForUpdates from "./helper/updater";
import config from "./helper/config";


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
// if (authKey === undefined) {
//     errorLog("+----------------------------------------+")
//     errorLog("| There is no authKey defined in the env |")
//     errorLog("+----------------------------------------+")
//     process.exit()
// }
configLog("Loading config");
const configFile = config();
configLog("Config loaded");

// Create a new express application instance
const app: express.Application = express();


httpMiddlewareLog("Registering Auth Middleware");
app.use(auth);
httpMiddlewareLog("Auth Middleware registered");

httpLog("Registering Routes");
app.use(routes);
httpLog("Routes registered");


app.listen(configFile.network.port, function () {
    infoLog("🚀 SystemManager Daemon Started");
    infoLog("🚀 Listening on", configFile.network.port);
});