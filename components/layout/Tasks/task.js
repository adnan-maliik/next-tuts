import {
  Button,
  Card,
  CardBody,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

const Task = ({ content, edited ,time,deleted}) => {
  return (
    <Card
      style={{ maxWidth: "40rem" }}
      className="rounded my-2 mx-auto shadow-lg rounded-pill p-1"
    >
      <CardBody className="d-flex">
        <h5 className="flex-fill">{content}</h5>
        <div className="hstack gap-2">
          <UncontrolledDropdown>
            <DropdownToggle size="sm" color="primary" ><i className="fa fa-clock-o"></i></DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Created At:</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>{time}</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Button size="sm" onClick={edited} >
            <i className="fa fa-edit"></i>
          </Button>
          <Button onClick={deleted} size="sm" color="danger">
            <i className="fa fa-trash"></i>
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Task;
