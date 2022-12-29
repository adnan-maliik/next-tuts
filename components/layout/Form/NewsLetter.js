import { useRef } from "react";
import { Alert, Button, Form, FormGroup, Input, Label, Spinner } from "reactstrap";
import useSWRMutation from "swr/mutation"
import { useAddSubscriberMutation } from "../../../swr/mutations/subscribers";
import Loader from "../Ui/Loader"
const NewsLetter = () => {
    const nameRef= useRef()
    const emailRef= useRef()
    const {isMutating,trigger,data} = useSWRMutation('/api/',useAddSubscriberMutation)
    const submitHanlder=async  event=>{
        event.preventDefault()
        try {
            const email= emailRef.current.value
            const name= nameRef.current.value
            if(![email,name].every(Boolean)) return
            console.log('user credentials',name, email);
            const data = await trigger({email,name})
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    isMutating ? <Loader/> :
    <Form onSubmit={submitHanlder} className="w-75 mx-auto my-3 text-center" method="post" >
      {data && <Alert color="success">New Subscriber added!</Alert> }
      <FormGroup floating className="my-3">
        <Input
          id="name"
          name="name"
          placeholder="Name"
          type="text"
          innerRef={nameRef}
        />
        <Label for="name">Name</Label>
      </FormGroup>
      <FormGroup floating className="my-3">
        <Input
          id="exampleEmail"
          name="email"
          placeholder="Email"
          type="email"
          innerRef={emailRef}
        />
        <Label for="exampleEmail">Email</Label>
      </FormGroup>
      <Button color="primary">Subscribe to NewsLetter</Button>
    </Form>
  );
};

export default NewsLetter;
