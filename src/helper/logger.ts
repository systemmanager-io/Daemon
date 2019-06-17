import debug from "debug";


export const daemonLog = debug('systemmanager');
export const infoLog = daemonLog.extend('info');
export const bootLog = daemonLog.extend('boot');
export const configLog = daemonLog.extend('config');
export const httpLog = daemonLog.extend('http');
export const httpMiddlewareLog = httpLog.extend('middleware');