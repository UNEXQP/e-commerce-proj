import { json } from "express";
import Product from "../models/productmodel.js";



export const createProduct = async (req, res) => {
  try {
    const { productName, productPrice, productDescription } = req.body;

    if (!productName || !productPrice || !productDescription) {
      return res.status(400).json({ message: "All fields are required" });
    }

   const newProduct=new Product({ productName, productPrice, productDescription } )
   await newProduct.save()

    return res.status(201).json({
      message: "Product created successfully",
      newProduct,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};


export const readProduct=async(req,res)=>{
    try {
                const cacheProducts=await redisClient.get("products")

        if(cacheProducts){ 
        console.log("cache hit")
        return res.status(200).json({message:"here are the products from cache",products:JSON.parse(cacheProducts)})
        }else{
          const products=await Product.find()
          await redisClient.setEx("products",60,JSON.stringify(products))
          return res.status(200).json({message:"here are the products",products})
        }
                
    } catch (error) {
        console.error(error)
    }
}

export const updateProduct=async(req,res)=>{
    try {
          const {productName,productPrice,productDescription}=req.body
          const updatedProduct=await Product.findByIdAndUpdate(
            req.params.id,{productName,productPrice,productDescription},{new:true}
          )
          return res.status(200).json({message:"here are your updated products",updatedProduct})
    } catch (error) {
        console.error(error)
    }
}

export const deleteProduct=async(req,res)=>{
    try {
          const deletedProduct=await Product.findByIdAndDelete(req.params.id)
          if(!deletedProduct){
            return res.status(400).json({message:"product couldnt be deleted"})
          }
          return res.status(200).json({message:"product deleted succesffuly",deletedProduct})
    } catch (error) {
        console.error(error)
    }
}