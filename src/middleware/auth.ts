import * as express from "express"
import {httpLog, httpMiddlewareAuthLog} from "../helper/logger";

export default function authMiddleware(req: any, res: any, next: any) {

    httpMiddlewareAuthLog("Authenticating with token");

    next();

}