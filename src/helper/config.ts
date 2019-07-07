import * as fs from "fs"

export default function loadConfig() {

    const config: any = fs.readFileSync(__dirname + "/../config/config.json");

    const parsedConfig = JSON.parse(config);

    return parsedConfig;

}

