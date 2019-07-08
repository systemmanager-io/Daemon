// lib/app.ts
import express from 'express';
import routes from './routes/api'

import auth from "./middleware/auth";
import logo from "./assets/logo";
import {bootLog, configLog, daemonLog, errorLog, httpLog, httpMiddlewareLog, infoLog} from "./helper/logger";
import checkConfig, {PORT} from "./helper/config";


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
checkConfig();
configLog("Config loaded");

// Create a new express application instance
const app: express.Application = express();


httpMiddlewareLog("Registering Middleware");
app.use(auth);
httpMiddlewareLog("Middleware registered");

httpLog("Registering Routes");
app.use(routes);
httpLog("Routes registered");


app.listen(PORT, function () {
    infoLog("🚀 SystemManager Daemon Started");
    infoLog("🚀 Listening on", PORT);
});