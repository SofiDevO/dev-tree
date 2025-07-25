import express  from 'express';
import router from './router';
import { connectDB } from './config/db';
import dotenv from "dotenv";
dotenv.config();

const app = express();


connectDB();

// Leer datos de formulario
app.use(express.json());

app.use('/', router);

export default app;
