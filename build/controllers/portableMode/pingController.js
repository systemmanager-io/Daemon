"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../../helper/logger");
const node_fetch_1 = __importDefault(require("node-fetch"));
const config_1 = require("../../helper/config");
function reportStatus() {
    return __awaiter(this, void 0, void 0, function* () {
        logger_1.portableModeInfoLog("Reporting status to panel");
        yield node_fetch_1.default(config_1.PANELURL, {})
            .then((result) => result.text())
            .catch((err) => {
            logger_1.portableModeErrorLog("=======================================================");
            logger_1.portableModeErrorLog("Error occured when reporting status");
            logger_1.portableModeErrorLog(err.message);
            logger_1.portableModeErrorLog("=======================================================");
        });
        logger_1.portableModeInfoLog("Reporting status to panel");
    });
}
exports.default = reportStatus;
