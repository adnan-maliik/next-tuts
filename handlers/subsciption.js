import Subscription from "../db/models/Subscription"

export async function getAllSubscriptionHanlder(req,res) {
    try {
        let result=await Subscription.find().exec()
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export async function addNewSubscriberHanlder(req,res) {
    try {
        const {email,name} = req.body
        if(![email,name].every(Boolean)) throw Error('Invalid Credentials!')
        const {_id}= await Subscription.create(req.body)
        res.status(201).json({message:`New Document Added with ${_id}`})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}