import { Button, Card, CardBody, CardFooter, CardImg, CardTitle } from "reactstrap"
import Link from "next/link"
const Event = ({ title, image, date, id ,description}) => {
    return (
        <Card className="shadow-lg rounded m-5 w-50 mx-auto">
            <CardTitle className="text-center text-primary pt-3">
                <h2>
                    {title}
                </h2>
            </CardTitle>
            <CardImg alt={title} loading='lazy' src={'/'+image} />
            <CardBody className="p-3">
                <i className="fa fa-calendar me-3"></i>
                {date}
                <p className="no-wrap">
                {description}
                </p>
            </CardBody>
            <CardFooter className="text-right" style={{"textAlign":"right"}}>
                <Button color="primary" tag={Link} href={`/events/${id}`} >View Event</Button>
            </CardFooter>
        </Card>
    )
}

export default Event