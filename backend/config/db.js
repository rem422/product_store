import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb Connected: ${conn.connection.host}`);
    }catch(error) {
        console.log(error.exit(1));//process code 1 means a failure, 0 means success
    }
}