import * as si from "systeminformation";


export async function periodicCheck(req: any, res: any,) {

    // let cpuInfo: Array<any> = Array();
    // await si.cpu().then((data) => cpuInfo.push(data));
    res.send({status: "online"});
}

