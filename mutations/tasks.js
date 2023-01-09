
import axios from "axios"

// add new task mutation
function addNewTaskMutation(url, { arg }) {
    return axios.post(url, arg)
}

function updateTaskMutation(url, { arg }) {
    return axios.put(url + '/' + arg.id, arg.body)
}
function deleteTaskMutation(url, { arg }) {
    return axios.delete(url + '/' + arg.id)
}
export {
    addNewTaskMutation,
    updateTaskMutation,
    deleteTaskMutation
}