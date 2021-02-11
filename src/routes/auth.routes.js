import {Router} from "express";
import * as Auth from "../controllers/auth.controller"
import * as verify from "../middlewares/verify"
const router= Router();
router.post("/signin", Auth.signIn);
router.post("/signup", verify.checkDuplicatedUser, Auth.signUp);

export default router;