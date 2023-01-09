import Form from "../components/layout/Tasks/Form";
import Task from "../components/layout/Tasks/task";
import ErrorMsg from "../components/layout/Ui/ErrorMsg";
import useSWRMutation from "swr/mutation"
import { deleteTaskMutation, updateTaskMutation } from "../mutations/tasks";
import { useRouter } from "next/router";
import { refreshPage } from "../utils/util";
import Loader from "../components/layout/Ui/Loader";
import { useMemo, useState } from "react";
import EditModal from "../components/layout/Tasks/EditModal";
import { Input } from "reactstrap";

export default function Home({hasError,error,tasks}) {
  const router= useRouter()
  const [showModal,setShowModal]=useState(false)
  const [editTask,setEditTask]=useState(null)
  const [search,setSearch]=useState('')
  const {trigger:deleteTask,isMutating} = useSWRMutation('/api/tasks',deleteTaskMutation)
  const {trigger:updateTask,isMutating:isUpdating} = useSWRMutation('/api/tasks',updateTaskMutation)

  const filteredItems=useMemo(()=>tasks.filter((task)=>task.content.match(new RegExp(search,'igm'))),[tasks,search])

  const deleteTaskHandler=async(id)=>{
    try {
       await deleteTask({id})
      refreshPage(router)
    } catch (error) {
      console.log(error.message);
    }
  }
  const editTaskHandler=async(id,content)=>{
    try {
      if(![id,content].every(Boolean)) return
      await updateTask({id,body:{content}})
      refreshPage(router)
    } catch (error) {
      console.log(error.message);
    }
  }

  const editModalOpener=(task)=>{
    setShowModal(true)
    setEditTask(task)
  }

  if(isMutating || isUpdating) return <Loader/>
  if(hasError) return <ErrorMsg message={error} />
  return (
    <div className="mb-5">
      <h1 className="display-3 text-center fw-bold mt-3 text-primary">
        NextJs + Firebase TODO App
      </h1>
      <Form/>
      <div className="clearfix">
        <div className="w-25 ms-auto me-2 shadow">
            <Input
            type="search"
            placeholder="search..."
            value={search}
            onChange={({target:{value}})=>setSearch(value)}
            />
        </div>
      </div>
      {filteredItems.map(task=>(
        <Task
        key={task.id}
        content={task.content}
        time={new Date(task.createdAt).toLocaleString()}
        deleted={()=>deleteTaskHandler(task.id)}
        edited={()=>editModalOpener(task)}
        />
      ))}
      <EditModal
      open={showModal}
      toggle={()=>setShowModal(!showModal)}
      task={editTask}
      clicked={editTaskHandler}
      />
    </div>
  );
}
// console.log('environment => ',process.env);

export async function getServerSideProps(context) {
  try {
    const hostUrl = context.req.headers.host
    const response = await fetch('http://'+hostUrl+'/api/tasks/')
    const tasks = await response.json()
    if(!tasks) throw Error('No Tasks found!')
    return {
      props:{
        tasks
      }
    }
  } catch (error) {
    console.log(error);
    return {
      props:{
        hasError:true,
        error:error.message
      }
    }
  }
}
