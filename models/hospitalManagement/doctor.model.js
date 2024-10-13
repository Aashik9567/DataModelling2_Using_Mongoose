import mongoose from "mongoose"

const doctorSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  salary:{
    type:Number,
    required:true
  },
  worksAt:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital",
    required:true
  }],
  specialistOf:{
    type:String,
  },
},{timestamps:true})
export const Doctor=mongoose.model("Doctor",doctorSchema)

