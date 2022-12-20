import { getEventDetail } from "../../mock/data"
import {useRouter} from "next/router"
import { Badge } from "reactstrap"
const EventDetailsPage = () => {
  const router = useRouter()
  const {id} = router.query
  console.log(router.query);
  const event = getEventDetail(id)
  if(!event){
    return <h1>Invalid Id</h1>
  }
  return (
   <div className="pt-5">
    <div className="w-50 mx-auto rounded shadow-lg">
    <img src={'/'+event.image} className="img-fluid"  alt={event.title} />

    </div>
    <h1>{event.title}</h1>
    <p>
      {event.description}
    </p>
    <p>
      <i className="fa fa-calendar me-2"></i>
      {event.date}
    </p>
    <p>
      <i className="fa fa-location me-2"></i>
      {event.location}
    </p>
    <p>{event.isFeatured && <Badge pill color="warning">Featured</Badge>}</p>
   </div>
  )
}

export default EventDetailsPage


