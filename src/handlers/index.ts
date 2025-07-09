import User from "../models/User";
import { Request, Response } from "express";

const createAccount = async (req:Request, res:Response) => {

    const user = new User(req.body);
    await user.save();
    res.json({ message: 'User registered successfully' });
}


export default createAccount;