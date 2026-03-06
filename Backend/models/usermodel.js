import mongoose from "mongoose";
import bcrypt from "bcrypt"


export const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre("save",async function () {
    if(!this.isModified("password")){
        return
    }
    this.password=await bcrypt.hash(this.password,10)
})

const User=mongoose.model("User",userSchema)

export default User