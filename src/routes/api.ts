import * as express from "express";
import * as cpuController from "../controllers/cpuController";
import * as statusController from "../controllers/statusController";

const router: express.Router = express.Router();

router.get('/status', function (req, res) {
    statusController.periodicCheck(req, res)
})

router.get('/cpu', function (req, res) {

    cpuController.getCPU(req, res);
});



export default router;