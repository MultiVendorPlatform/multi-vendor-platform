import mongoose from "mongoose";

export function dbConnect() {
    if(mongoose.connection.readyState >= 1){
        console.log("Database already connected");
        return;
    }

    mongoose.connect(process.env.MONGO_URI as string);
    console.log("Database connected");
}