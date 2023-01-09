import { db } from "../lib/firebase";
import { Timestamp } from "firebase-admin/firestore";
const tasksRef= db.collection('tasks')
// get all tasks controller
export async function getAllTasksHandler(req,res) {
    try {
        const {docs}= await tasksRef.orderBy('createdAt','desc').get()
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
// add new task controller

export async function addNewTaskHandler(req,res) {
    try {
        const {task} = req.body
        if(!task) throw Error('Invalid Credentials!')
        await tasksRef.add({content:task,createdAt:Timestamp.now()})
        res.status(204).json()
    } catch (error) {
        console.log(error.message);
        res.status(400).json({
            message:error.message
        })
    }
}

//edit task handler
export async function editTaskHandler(req,res) {
    try {
        const {id} = req.query
        if(!id) throw Error('No Id Found!')
        const {content} = req.body
        if(!content) throw Error('No Update Content found!')
        await tasksRef.doc(id).update({content,createdAt:Timestamp.now()})
        res.status(201).json()
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message:error.message})
    }
}

//delete task handler
export async function deleteTaskHandler(req,res) {
    try {
        const {id} = req.query
        await tasksRef.doc(id).delete()
        res.status(201).json()
    } catch (error) {
        console.log(error.message);
        res.status(400).json({message:error.message})
    }
}
