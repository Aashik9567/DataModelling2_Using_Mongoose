import mongoose from "mongoose"

const patientSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    enum:["M","F","O"],
    required:true
  },
  admittedIn:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  },
  diseases:{
    type:String,
    required:true
  },

},{timestamps:true})
export const Patient=mongoose.model("Patient",patientSchema)