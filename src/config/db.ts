import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async() => {
    try {
        const url = process.env.MONGODB_URI;
        if (!url) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }
        const connection = await mongoose.connect(url);
        console.log(`MongoDB connected 🦝: ${connection.connection.host}`);
    } catch (error) {
        console.log(`Error al conectar: ${error}`);
        process.exit(1);
    }
}
