import {infoLog, portableModeErrorLog, portableModeInfoLog} from "../../helper/logger";
import fetch from "node-fetch"
import {AUTHTOKEN, DEVICEID, PANELURL} from "../../helper/config";
import * as si from "systeminformation";

export default async function reportStatus() {

    portableModeInfoLog("Reporting status to panel")

    si.battery().then(data => infoLog(data))

    let body: any = {
        "CPU": {
            "avg": 0
        },
        "RAM": {
            "avg": 0
        },
        "BATT": {
            "percent": 0,
            "charging": true
        }
    };

    await fetch(PANELURL + "/server/status", {
        method: "POST",
        headers: {
            "authToken": AUTHTOKEN,
            "deviceId": DEVICEID,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
        .then((result: any) => {
            portableModeInfoLog("Successfully reported status to the panel")
        })
        .catch((err: any) => {
            portableModeErrorLog("=======================================================");
            portableModeErrorLog("Error occured when reporting status");
            portableModeErrorLog(err.message);
            portableModeErrorLog("=======================================================");
        });
}