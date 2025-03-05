import express from "express";
import { createProduct, getProducts, updateProduct, deleteProduct } from "../controllers/product.controller.js";

const router = express.Router();

//ADD NEW PRODUCT TO THE SERVER
router.post("/", createProduct);

//GET PRODUCT FROM THE SERVER
router.get("/", getProducts);

//UPDATE A PRODUCT IN THE SERVER
router.put("/:id", updateProduct);

//DELETE PRODUCT FROM THE SERVER
router.delete("/:id", deleteProduct);

export default router;