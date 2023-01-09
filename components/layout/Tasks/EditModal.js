import { useEffect, useState } from 'react';
import { Button, Modal,Input, ModalBody, ModalFooter } from 'reactstrap';
const EditModal = (props) => {
    const [content,setContent]=useState(props.task?.content)
    useEffect(()=>{
        setContent(props.task?.content)
    },[props.task])
    return (
        <Modal isOpen={props.open} toggle={props.toggle} >
            <ModalBody>
                <Input
                    type='textarea'
                    value={content}
                    onChange={({target:{value}})=>setContent(value)}
                >
                </Input>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={props.clicked.bind(null,props.task?.id,content)}>Update Content</Button>
            </ModalFooter>
        </Modal>
    )
}

export default EditModal