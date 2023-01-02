import Form from "../components/layout/Tasks/Form";
import Task from "../components/layout/Tasks/task";
import ErrorMsg from "../components/layout/Ui/ErrorMsg";

export default function Home({hasError,error,tasks}) {
  if(hasError) return <ErrorMsg message={error} />
  return (
    <div>
      <h1 className="display-3 text-center fw-bold mt-3 text-primary">
        NextJs + Firebase TODO App
      </h1>
      <Form/>
      {tasks.map(task=>(
        <Task
        key={task.id}
        content={task.content}
        time={new Date(task.createdAt).toLocaleString()}
        />
      ))}
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
    console.log(error.message);
    return {
      props:{
        hasError:true,
        error:error.message
      }
    }
  }
}
