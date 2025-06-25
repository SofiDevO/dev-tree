import mongoose from "mongoose";
import colors from 'colors';


export const connectDB = async() => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGODB_URI);
        const url2= `${connection.host}:${connection.port} `
        console.log(colors.bold.yellow(`Conectado a la base de datos en ${url2}`));
    } catch (error) {
        console.log(colors.bgRed.bold.white(`Error al conectar: ${error}`));
        process.exit(1);
    }
}
