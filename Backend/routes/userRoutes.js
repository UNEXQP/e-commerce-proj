import express from "express"
import { login,register,getUsers } from "../controller/userController.js"

const authRoute=express.Router()


authRoute.post("/login",login)
authRoute.post("/register",register)
authRoute.get("/allusers",getUsers)

   
export default authRoute