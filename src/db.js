import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDb= async()=>{


    try{

     //await mongoose.connect(`mongodb+srv://russito:${pw}@cluster-eric.mgj8jzn.mongodb.net/`);
     await mongoose.connect(MONGODB_URI);
        console.log(">>> DB is connected " + MONGODB_URI);
       

    }catch(err){


        console.log(err)

    }

}
