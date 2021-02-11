import {Router} from "express";
import * as UserCtrl from "../controllers/users.controller";
import * as Middlwares from "../middlewares/authjwt"
import * as verify from "../middlewares/verify";
const router= Router();

router.post("/", [Middlwares.verifyToken, verify.checkRolesExisted, Middlwares.isAdmin], UserCtrl.createUser);
export default router;