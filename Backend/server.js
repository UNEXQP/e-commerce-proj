import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import { createClient } from "redis";

dotenv.config(); 

const app = express();
app.use(cors());
app.use(express.json()); 


mongoose.connect(process.env.MONGO_URI) 
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error(err));


export const redisClient = createClient({
  url: process.env.REDIS_URL 
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));

await redisClient.connect();
console.log("Connected to Redis Cloud!");




app.use("/api/user", authRoute);
app.use("/api/product", productRouter);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
