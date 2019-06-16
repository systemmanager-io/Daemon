import * as express from "express"

export default function authMiddleware(req: any, res: any, next: any) {

    console.log("LOGGED");

    next();

}