import dotenv from "dotenv";
dotenv.config();
import connectToData from "./db.js";
import express from "express";
import cors from "cors";

// routes
import productRoute from "./routes/productRoute.js";

connectToData();
const app=express();
app.use(express.json());
app.use(cors());

app.use('/api/getproduct', productRoute)
const port=7070;

app.get("/",( req, res)=>{
    res.send("Hello World");
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})
