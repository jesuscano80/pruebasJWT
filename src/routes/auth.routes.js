import {Router} from "express";
import * as Auth from "../controllers/auth.controller"

const router= Router();
router.post("/signin", Auth.signIn);
router.post("/signup", Auth.signUp);

export default router;