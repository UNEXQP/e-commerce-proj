import express from "express"
import { createProduct,readProduct,updateProduct,deleteProduct } from "../controller/productController.js"


const productRouter=express.Router()

productRouter.post("/",createProduct)
productRouter.get("/",readProduct)
productRouter.put("/:id",updateProduct)
productRouter.delete("/:id",deleteProduct)

export default productRouter