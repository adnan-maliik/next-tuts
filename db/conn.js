import mongoose from "mongoose";

//create connection middleware
export function connectDB(handler) {
    return async(req,res)=>{
        try {
            if(mongoose.connections[0].readyState){
                return handler(req,res)
            }
            await mongoose.connect('mongodb://0.0.0.0/nextDB')
            return handler(req,res)
        } catch (error) {
            process.nextTick(()=>{
                throw Error(error.message)
            })
        }
    }
}