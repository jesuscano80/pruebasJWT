import {Router} from "express";
import * as productCtrl from "../controllers/product.controller"
const router= Router();


router.get("/", productCtrl.getProducts);
router.post("/", productCtrl.createProducts);
router.get("/:productId", productCtrl.getProductById);
router.put("/:productId", productCtrl.updateProductById);
router.delete("/:productId", productCtrl.deleteProductById);

export default router;

