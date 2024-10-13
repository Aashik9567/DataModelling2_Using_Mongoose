import mongoose from "mongoose"

const userSchema=new mongoose.Schema(
{
  username:{
    type:String,
    required:true,
    lowercase:true,
    unique:true
  },
  email:String,
  password:[String,"password is required"],
  isActive:Boolean
},{timestamps:true})

export const User=mongoose.model("User",userSchema)