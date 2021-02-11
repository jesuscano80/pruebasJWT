import {Router} from "express";
import * as productCtrl from "../controllers/product.controller"
import {verifyToken} from "../Middlewares"
import { isAdmin, isModerator } from "../Middlewares/authjwt";
const router= Router();


router.get("/", productCtrl.getProducts);
router.post("/", [verifyToken,isModerator, isAdmin], productCtrl.createProducts);
router.get("/:productId", productCtrl.getProductById);
router.put("/:productId", [verifyToken, isAdmin], productCtrl.updateProductById);
router.delete("/:productId", [verifyToken, isAdmin], productCtrl.deleteProductById);

export default router;

