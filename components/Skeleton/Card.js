import { Button, Card as StrapCard, CardBody } from "reactstrap";

const Card = () => {
  return (
    <>
      <StrapCard className="my-2">
        <CardBody>
          <p className="placeholder-wave">
            <span className="placeholder col-12" style={{"height":"10rem"}} ></span>
          </p>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <Button className="btn btn-primary disabled placeholder col-6"></Button>
        </CardBody>
      </StrapCard>
    </>
  );
};

export default Card;
