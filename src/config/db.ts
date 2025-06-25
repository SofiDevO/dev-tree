import mongoose from "mongoose";


export const connectDB = async() => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI);
        const url2= `${connection.host}:${connection.port} `
        console.log(`Conectado a la base de datos en ${url2}`);
    } catch (error) {
        console.log(`Error al conectar: ${error}`);
        process.exit(1);
    }
}
