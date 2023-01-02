import React from 'react'
import { Button, Input, InputGroup } from 'reactstrap'

const Form = () => {
  return (
    <div className="my-5 shadow w-75 mx-auto">
        <InputGroup>
            <Input
            type="textarea"
            
            />
            <Button color='primary'>
                <i className="fa fa-plus"></i>
            </Button>
        </InputGroup>
    </div>
  )
}

export default Form