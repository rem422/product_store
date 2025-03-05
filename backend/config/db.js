import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    }catch(error) {
        console.log(error.exit(1));//process code 1 means a failure, 0 means success
    }
}

export default connectDB;