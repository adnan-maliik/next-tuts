import { Alert } from "reactstrap"

const ErrorMsg = ({message}) => {
  return (
    <div className="my-3 w-75 mx-auto rounded">
        <Alert color="danger" >
            {JSON.stringify(message)}
        </Alert>
    </div>
  )
}

export default ErrorMsg