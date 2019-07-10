import {portableModeErrorLog, portableModeInfoLog} from "../../helper/logger";
import fetch from "node-fetch"
import {PANELURL} from "../../helper/config";

export default async function reportStatus() {

    portableModeInfoLog("Reporting status to panel")

    await fetch(PANELURL, {

    })
        .then((result: any) => result.text())
        .catch((err: any) => {
            portableModeErrorLog("=======================================================");
            portableModeErrorLog("Error occured when reporting status");
            portableModeErrorLog(err.message);
            portableModeErrorLog("=======================================================");
        });

    portableModeInfoLog("Reporting status to panel")

}