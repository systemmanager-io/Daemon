import {infoLog, portableModeErrorLog, portableModeInfoLog} from "../../helper/logger";
import fetch from "node-fetch"
import {AUTHTOKEN, DEVICEID, PANELURL} from "../../helper/config";
import * as si from "systeminformation";
import {loadavg} from "os";

export default async function reportStatus() {

    portableModeInfoLog("Reporting status to panel")

    portableModeInfoLog("Collecting data");
    portableModeInfoLog("Collecting Battery");
    const battery = await si.battery();
    portableModeInfoLog("Collecting Cpu");
    const cpu = await si.cpu();

    portableModeInfoLog("Collecting Graphics");
    const gpu = await si.graphics();

    portableModeInfoLog("Collecting Mem");
    const mem = await si.mem();

    portableModeInfoLog("Collecting Load");
    const load = await si.currentLoad();

    portableModeInfoLog("Collecting Disks");
    const disks = await si.diskLayout();

    // portableModeInfoLog("Collecting ");
    // const smart = await si.().catch(err => portableModeErrorLog(err))




    let body: any = {
        "CPU": {
            "speed": cpu.speed
        },
        "RAM": {
            "free": mem.free,
            "used": mem.used
        },
        "LOAD": {
            "avg": load.avgload,
            // "cpus": load.cpus,
        },
        "BATT": {
            "percent": battery.percent,
            "charging": battery.ischarging
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