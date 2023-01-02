import { db } from "../lib/firebase";

export async function getAllTasksHandler(req,res) {
    try {
        const {docs}= await db.collection('tasks').orderBy('createdAt','desc').get()
        if(!docs) throw Error('Error occured while founding docs!')
        const tasks=docs.map(doc=>({
            id:doc.id,
            ...doc.data(),
            createdAt:doc.data().createdAt.toDate()
        }))
        res.json(tasks)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message:error.message
        })
    }
}

export async function addNewTaskHandler(req,res) {
    try {
        const body = req.body
        res.status(201).json(body)
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            message:error.message
        })
    }
}