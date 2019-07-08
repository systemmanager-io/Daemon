import * as express from "express"
import {httpLog, httpMiddlewareAuthLog} from "../helper/logger";
import {AUTHKEY} from "../helper/config";

export default function authMiddleware(req: any, res: any, next: any) {

    httpMiddlewareAuthLog("Authenticating with token");
    let authHeader = req.header('Authorization');


    if (authHeader == undefined || authHeader == null) {
        res.send({error: 'Authorization header missing'}).status(403);
        return

    }

    if (authHeader == AUTHKEY) {
        next();
        return
    }

    res.send({error: "Authorization key is wrong"})

}