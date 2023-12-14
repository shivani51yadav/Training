import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv"

dotenv.config()

const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`connected to Mongodb Database`.bgMagenta.white);
    }catch(err)
    {
        console.log(`Mongo Connect Error ${err}`.bgRed.white);
    }
};

export default connectDB;