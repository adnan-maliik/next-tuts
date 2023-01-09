import { useRef } from "react"
import { Button, Form, FormGroup, Input } from "reactstrap"

const From = ({addHanlder}) => {
    const emailRef=useRef()
    const nameRef=useRef()
    const handleSubmit=e=>{
        e.preventDefault()
        const email=emailRef.current.value
        const name=nameRef.current.value
        if(!email || !nameRef) return
        addHanlder({email,name})
    }
  return (
    <Form className="text-center w-50 mx-auto shadow vstack gap-2 rounded border-2 border-primary" onSubmit={handleSubmit}>
        
        <Input
        type="text"
        placeholder="enter your name"
        required
        innerRef={nameRef}
        />
        <Input
        type="email"
        placeholder="enter your email!"
        required
        innerRef={emailRef}
        />
        <Button color="primary" >Submit</Button>
    </Form>
  )
}

export default From