import * as fs from "fs"
import {errorLog} from "./logger";


export default function checkConfig() {

    const fileExists = fs.existsSync(__dirname + "/../config/config.json");
    if(!fileExists) {

        errorLog.enabled = true;
        errorLog("+------------------------------------------+");
        errorLog("| Config file does not exist, creating now |");
        errorLog("+------------------------------------------+");
        process.exit();

    }

}

export function loadConfig() {

    checkConfig();

    const config: any = fs.readFileSync(__dirname + "/../config/config.json");

    const parsedConfig = JSON.parse(config);

    return parsedConfig;

}

//Network related config
export const PORT = loadConfig().network.port;
export const BIND = loadConfig().network.bind;

//Autht
export const AUTHKEY = loadConfig().panel.authKey;

export const PANELURL = loadConfig().portableMode.url;
export const PORTABLEMODE = loadConfig().portableMode.portableMode;

