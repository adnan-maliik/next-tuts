import { addNewTaskHandler, getAllTasksHandler } from "../../../handlers/tasks"

export default function handler(req,res) {
    switch (req.method) {
        case 'GET':
            return getAllTasksHandler(req,res) 
        case 'POST':
            return addNewTaskHandler(req,res) 
        default :
           return res.json('ok')     
    }
}