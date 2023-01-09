import { deleteTaskHandler, editTaskHandler } from "../../../handlers/tasks"

export default function hanlder(req,res) {
    switch (req.method) {
        case 'PUT':
        return editTaskHandler(req,res)        
        case 'DELETE':
        return deleteTaskHandler(req,res)        
        default:
            res.status(404).json()
    }
}