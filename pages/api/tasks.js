import { getAllTasksHandler } from "../../handlers/tasks";

export default function handler(req,res) {
    switch (req.method) {
        case 'GET':
            return getAllTasksHandler(req,res)    
        default:
            break;
    }
}