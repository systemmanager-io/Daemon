import * as express from "express";
import * as cpuController from "../controllers/cpuController";

const router: express.Router = express.Router();

router.get('/status', function (req, res) {
    console.log("YEET");
    res.send("BOOM");
})

router.get('/cpu', function (req, res) {

    cpuController.getCPU(req, res);
});



export default router;