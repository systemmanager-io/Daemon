"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const cpuController = __importStar(require("../controllers/cpuController"));
const router = express.Router();
router.get('/status', function (req, res) {
    console.log("YEET");
    res.send("BOOM");
});
router.get('/cpu', function (req, res) {
    cpuController.getCPU(req, res);
});
exports.default = router;
