import { connectDB } from "../../db/conn"
import { addNewSubscriberHanlder, getAllSubscriptionHanlder } from "../../handlers/subsciption"

function hanlder(req,res) {
    switch (req.method) {
        case 'GET':
        return getAllSubscriptionHanlder(req,res)
        case 'POST':
        return addNewSubscriberHanlder(req,res)
        default:
            res.status(404).json()
    }
}

export default connectDB(hanlder)