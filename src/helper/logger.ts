import debug from "debug";

//
const daemonLog = debug('systemmanager');

//Daemon Log
export const infoLog = daemonLog.extend('info');
export const errorLog = daemonLog.extend('error');
export const bootLog = daemonLog.extend('boot');
export const updaterLog = daemonLog.extend('updater');

// PortableMode Log
const portableModeLog = daemonLog.extend('portableMode');
export const portableModeInfoLog = portableModeLog.extend('info');
export const portableModeErrorLog = portableModeLog.extend('error');

// Config Log
export const configLog = daemonLog.extend('config');

// HTTP Log
export const httpLog = daemonLog.extend('http');
export const httpMiddlewareLog = httpLog.extend('middleware');
export const httpMiddlewareAuthLog = httpMiddlewareLog.extend('auth');

/*
    Default Logging in the application.
    You can disable stuff in here. But this is not advertised!

    I know the bootLog is not much of use now. BUT it will be responsible for version controlling! So if you dont want to be missing updates DONT TURN IT OFF.
 */

bootLog.enabled = true;
infoLog.enabled = true;
errorLog.enabled = true;
configLog.enabled = true;

// Enable the portable mode logger when portablemode is turned on
portableModeInfoLog.enabled = true;
portableModeErrorLog.enabled = true;

/*
    Advanced logging when debug setting has been set.

    There are 3 Modes (4 If you count the default one)
    1. Basic
    2. Advanced
    3. SHIT GO CRAZY (This will log EVERYTHING in the app, even the dependencies)
 */

if (2 == 2 || "local" == "local") {
    httpLog.enabled = true;
    httpMiddlewareLog.enabled = false;
    httpMiddlewareAuthLog.enabled = true;
}

/*
    Last note: There are loggers (such as the Updater), that only will be activated for certain events. In the updaters case the updater wil disable itself after it has logged its neccesary things
 */