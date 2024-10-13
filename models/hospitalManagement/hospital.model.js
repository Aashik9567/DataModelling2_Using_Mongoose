import mongoose from "mongoose"

const hospitalSchema=new mongoose.Schema({
  name:{
    type:string,
    required:true
  },
  address:{
    type:string,
    required:true
  },
},{timestamps:true})
export const Hospital=mongoose.model("Hospital",hospitalSchema)