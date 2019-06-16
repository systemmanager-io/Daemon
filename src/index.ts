// lib/app.ts
import express from 'express';
import routes from  './routes/api'

import * as si from 'systeminformation';
import auth from "./middleware/auth";
import logo from "./assets/logo";
import {httpLog, httpMiddlewareLog} from "./helper/logger";


console.log(logo(3));
console.log("====================================================");
console.log("");
console.log("SystemManager Monitoring Software");
console.log("V0.1 Alpha");
console.log("");
console.log("====================================================");

// Create a new express application instance
const app: express.Application = express();


httpMiddlewareLog("Registering Auth Middleware");
app.use(auth);
httpMiddlewareLog("Auth Middleware registered");

httpLog("Registering Routes");
app.use(routes);
httpLog("Routes Registered");

app.listen(3000, function () {
    console.log('SystemManager started!', 'Listening on port 3000');
});