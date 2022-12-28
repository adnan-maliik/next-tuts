import Image from "next/image"
import Link from "next/link"
import { Button, CardBody, CardFooter, CardTitle,Card, } from "reactstrap"

const EventCard = ({title,image,location,date,id}) => {
  return (
    <Card className="my-5 rounded shadow mx-auto" style={{"maxWidth":"40rem"}}>
        <CardTitle className="bg-primary text-center py-2 text-light fw-bold display-5">
            {title}
        </CardTitle>
        <CardBody className="position-relative p-0 m-0" style={{height:"10rem"}}>
            <Image src={'/'+image} alt={title} 
                style={{
                    "objectFit":"cover",
                }}
                fill
              />
        </CardBody>
        <CardFooter>
            <i className="fa fa-calendar me-2 " />{new Date(date).toLocaleDateString()}
            <br />
            <i className="fa fa-home me-2 " />{location}
            <div className="clearfix">
                <Button color="primary" className="float-end" >
                        <Link href={{
                            pathname:'/events/[id]',
                            query:{
                                id
                            }
                        }}  
                        className='text-decoration-none text-light'
                        >
                        View Event
                        </Link>
                </Button>
            </div>
        </CardFooter>
    </Card>
  )
}

export default EventCard    

