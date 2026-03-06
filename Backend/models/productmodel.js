import mongoose from "mongoose";
import bcrypt from "bcrypt"


export const productSchema=mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    }
})



const Product=mongoose.model("Product",productSchema)

export default Product