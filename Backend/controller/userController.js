import User from "../models/usermodel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


export const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body

        if(!name||!email||!password){
            return res.status(400).json({message:"parameters missed"})
        }

        const checkuserExist= await User.findOne({email})

        if(checkuserExist){
            return res.status(400).json({message:"email already in use mate sorry"})
        }

        

const newUser=await new User({name,email,password})
newUser.save()
const token=jwt.sign(
    {id:newUser._id},
    process.env.JWT_SECRET_TOKEN,
    {expiresIn:"1h"}
)

return res.status(200).json({message:"user created successfully",token})
    } catch (error) {
        console.error(error)
    }
}

export const login=async(req,res)=>{
    try {
        const {name,email,password}=req.body

        if(!name||!email||!password){
            return res.status(400).json({message:"parameters missed"})
        }

        const checkuserExist= await User.findOne({email})

        if(!checkuserExist){
            return res.status(400).json({message:"user not found"})
        }

        const isMatch=bcrypt.compare(this.password,password)
        if(!isMatch){
            return res.status(400).json({message:"password is incorrect"})
        }

const token=jwt.sign(
    {id:checkuserExist._id},
    process.env.JWT_SECRET_TOKEN,
    {expiresIn:"1h"}
)

return res.status(200).json({message:"user loggedIn successfully",token})
    } catch (error) {
        console.error(error)
    }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.find()

    return res.status(200).json({
      message: "Here are the users",
      users
    })

  } catch (error) {
    console.error(error)

    return res.status(500).json({
      message: "Internal Server Error"
    })
  }
} 