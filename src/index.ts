// lib/app.ts
import express from 'express';
import routes from './routes/api'

import auth from "./middleware/auth";
import logo from "./assets/logo";
import {bootLog, httpLog, httpMiddlewareLog, infoLog} from "./helper/logger";

bootLog.enabled = true;
infoLog.enabled = true;
const bootLogo = true;

if (bootLogo) {
    bootLog(logo(3));
}
bootLog("+----------------------------------------------------+");
bootLog("|                                                    |");
bootLog("|    SystemManager Monitoring Software V0.1 Alpha    |");
bootLog("|              https://systemmanager.io              |");
bootLog("|       Copyright 2018 - 2019 Tigo Middelkoop        |");
bootLog("|                                                    |");
bootLog("+----------------------------------------------------+");

infoLog("SystemManager Daemon Booting up");

// Create a new express application instance
const app: express.Application = express();


httpMiddlewareLog("Registering Auth Middleware");
app.use(auth);
app.use(auth);
httpMiddlewareLog("Auth Middleware registered");

httpLog("Registering Routes");
app.use(routes);
httpLog("Routes Registered");

app.listen(3000, function () {
    infoLog("🚀 SystemManager Daemon Started");
    infoLog("🚀 Listening on :port");
});