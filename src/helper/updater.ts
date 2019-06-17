import * as YAML from "yaml"
import {updaterLog} from "./logger";

export default function checkForUpdates(): any {
    //We enable the updaterLog to display an message
    updaterLog.enabled = true;
    updaterLog("+---------------------------------------+");
    updaterLog("| SystemManager Daemon Update Available |");
    updaterLog("+---------------------------------------+");
    //OR But i think the first one will be way more visible. but on the other hand the last one will allow to show the version number more easily.
    updaterLog("New Update Available!");

    // Disable the updaterLog as we wont need it for a long time
    updaterLog.enabled = false;

}


