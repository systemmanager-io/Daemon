import * as YAML from "yaml"
import {updaterLog} from "./logger";

export default function checkForUpdates(): any {
    updaterLog.enabled= true;
    updaterLog("+---------------------------------------+");
    updaterLog("| SystemManager Daemon Update Available |");
    updaterLog("+---------------------------------------+");
    //OR But i think the first one will be way more visible
    updaterLog("New Update Available!")
    updaterLog.enabled= false;

}