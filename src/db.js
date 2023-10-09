import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

const pw='6QgactpItROjwM8O';

export const connectDb= async()=>{


    try{

     //await mongoose.connect(`mongodb+srv://russito:${pw}@cluster-eric.mgj8jzn.mongodb.net/`);
     await mongoose.connect(MONGODB_URI);
        console.log(">>> DB is connected");

    }catch(err){


        console.log(err)

    }

}
