import * as express from "express"
import {httpLog} from "../helper/logger";

export default function authMiddleware(req: any, res: any, next: any) {

    httpLog("Authenticating with token");

    next();

}