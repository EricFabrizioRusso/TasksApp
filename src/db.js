import mongoose from "mongoose";


const pw='6QgactpItROjwM8O';

export const connectDb= async()=>{


    try{

     await mongoose.connect(`mongodb+srv://russito:${pw}@cluster-eric.mgj8jzn.mongodb.net/`);
        console.log(">>> DB is connected");

    }catch(err){


        console.log(err)

    }

}
