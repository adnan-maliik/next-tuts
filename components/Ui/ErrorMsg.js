import PropTypes from "prop-types"

const ErrorMsg = ({msg}) => {
  return (
    <div className="alert alert-danger" role="alert">
    <h4 className="alert-heading"><i className="fa fa-exclamation"></i></h4>
    <p>{JSON.stringify(msg)}</p>
    <hr />
    <p className="mb-0">Try refreshing your page, or check your Network!</p>
  </div>
  )
}

ErrorMsg.propTypes={
    msg:PropTypes.string.isRequired
}
export default ErrorMsg