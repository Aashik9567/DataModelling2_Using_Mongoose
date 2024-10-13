import mongoose from "mongoose"

const medicalRecordSchema=new mongoose.Schema({
  disease:{
    type:String,
    required:true
  },
  bloodGroup:{
    type:String,
    required:true
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Patient"
  }
},{timestamps:true})
export const MedicalRecord=mongoose.model("MedicalRecord",medicalRecordSchema)