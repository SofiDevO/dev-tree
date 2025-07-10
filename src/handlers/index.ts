import User from "../models/User";
import { Request, Response } from "express";

const createAccount = async (req:Request, res:Response) => {

    const {email} = req.body;

    const userExist = await User.findOne({email});

    if(userExist){
        const error = new Error('User already exist');
        res.json({error: error.message});
    }
    return

    const user = new User(req.body);
    await user.save();
    res.json({ message: 'User registered successfully' });
}


export default createAccount;
