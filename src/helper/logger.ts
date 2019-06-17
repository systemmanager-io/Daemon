import debug from "debug";


export const daemonLog = debug('systemmanager');
export const infoLog = daemonLog.extend('info');
export const bootLog = daemonLog.extend('boot');
export const updaterLog = daemonLog.extend('updater');
export const configLog = daemonLog.extend('config');
export const httpLog = daemonLog.extend('http');
export const httpMiddlewareLog = httpLog.extend('middleware');

/*
    Default Logging in the application.
    You can disable stuff in here. But this is not advertised!

    I know the bootLog is now much of use now. BUT it will be responsible for version controlling! So if you dont want to be missing updates DONT TURN IT OFF.
 */
bootLog.enabled = true;
infoLog.enabled = true;


/*
    Advanced logging when debug setting has been set.

    There are 3 Modes (4 If you count the default one)
    1. Basic
    2. Advanced
    3. SHIT GO CRAZY (This will log EVERYTHING in the app, even the dependencies)
 */
httpLog.enabled = false;
httpMiddlewareLog.enabled = false;

/*
    Last note: There are loggers (such as the Updater), that only will be activated for certain events. In the updaters case the updater wil disable itself after it has logged its neccesary things
 */