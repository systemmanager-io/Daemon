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

export const PORT = loadConfig().network.port;
export const BIND = loadConfig().network.bind;
export const URL = loadConfig().panel.url;
export const AUTHKEY = loadConfig().panel.authKey;
export const PORTABLEMODE = loadConfig().panel.portableMode;

