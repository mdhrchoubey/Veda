import mongoose from "mongoose";

const connectToData= async()=>{
    try {
        mongoose.set('strictQuery', false);
        const connect=await mongoose.connect("mongodb+srv://mdhrchoubey:DsqYfwIzNrLflpvj@mernproject.tgo20.mongodb.net/Dream", {
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(`error: ${error.message}`)
    }
}

export default connectToData