import { Request, Response } from "express";
import {validationResult } from 'express-validator';
import  slug from "slug";
import User from "../models/User";
import { hashPassword } from "../utils/auth";


const createAccount = async (req:Request, res:Response) => {
    // handle errors
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    return

    const {email, password} = req.body;


    const userExist = await User.findOne({email});
    if(userExist){
        const error = new Error('User already exist with this email');
        return res.json({error: error.message});
        return res.status(409).json({ error });
    }

    const handle = slug(req.body.handle, '');
    const handleExist = await User.findOne({ handle});
    if(handleExist){
        const error = new Error('Username not available');
        return res.json({error: error.message});
        return res.status(409).json({ error});
    }

    const user = new User(req.body);

    user.password = await hashPassword(password);
    user.handle = handle;


    await user.save();
    res.json({ message: 'User registered successfully' });
}


export default createAccount;
