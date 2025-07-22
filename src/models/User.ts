import mongoose, { Schema } from "mongoose";


interface IUser{
  handle: string;
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema({
  handle: {
    type: String,
    required: true,
    trim:true,
    lowercase: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User  = mongoose.model<IUser>('User', userSchema);

export default User;
