import mongoose from "mongoose";




const connectDb=async()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("Mongo is connected")
    }catch(err){
        console.log(err)
    }
}

export default connectDb