import { Router } from "express";
import { getCategories,  listProducts ,getProductBySlug } from "../controllers/productController";

const router = Router();

router.get("/", listProducts);
router.get("/categories", getCategories);
router.get("/:slug", getProductBySlug);

export default router;