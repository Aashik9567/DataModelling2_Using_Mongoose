import mongoose, { model } from "mongoose"

const todoSchema= new mongoose.Schema(
  {
     content:{
       type:String,required:true,
     },
     isCompleted:{
      type:Boolean,
      default:false
     },
     createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
     },
     subTodos:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Subtodo"
     }]
  },{timestamps:true})

export const Todo = mongoose.model("Todo",todoSchema)