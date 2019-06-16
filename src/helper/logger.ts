import debug from "debug";

export const daemonLog = debug('systemmanager');
export const httpLog = daemonLog.extend('http');
export const httpMiddlewareLog = httpLog.extend('middleware');