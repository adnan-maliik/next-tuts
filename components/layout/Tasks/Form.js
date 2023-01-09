import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { Button, Input, InputGroup, Spinner } from 'reactstrap'
import useSWRMutation from "swr/mutation"
import { addNewTaskMutation } from '../../../mutations/tasks'
import { refreshPage } from '../../../utils/util'
import ErrorMsg from '../Ui/ErrorMsg'
const Form = () => {
  const router=useRouter()
  const { trigger, isMutating, error } = useSWRMutation('/api/tasks', addNewTaskMutation)
  const taskRef = useRef()
  const addTaskHandler = async () => {
    let task = taskRef.current.value
    if (!task) return
    try {
      await trigger({ task })
      taskRef.current.value = ''
      refreshPage(router)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="my-5 shadow w-75 mx-auto">
      {error && <ErrorMsg message={error.message} />}
      <InputGroup>
        <Input
          type="textarea"
          innerRef={taskRef}
          placeholder='add new task...'
        />
        <Button color='primary' disabled={isMutating} onClick={addTaskHandler}>
          {isMutating ? <Spinner /> : <i className="fa fa-plus"></i>}
        </Button>
      </InputGroup>
    </div>
  )
}

export default Form