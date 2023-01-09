import  { model, Schema,models } from "mongoose";


const subscriptionSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        trim:true,
        required:true
    },
})

const Subscription=models.Subscription ||  model('Subscription',subscriptionSchema)
export default  Subscription