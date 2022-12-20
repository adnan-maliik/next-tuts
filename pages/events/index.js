import { useRef } from "react"
import { Button, Input, InputGroup } from "reactstrap"
import Event from "../../components/events/Event"
import { getAllEvents } from "../../mock/data"
import {useRouter} from "next/router"
function EventPage() {
    const events = getAllEvents()
    const router = useRouter()
    const date = useRef()
    const filterSlugHandler = ()=>{
        let fDate= date.current.value
        if(!fDate) return 
        fDate= new Date(fDate)
        let fMonth = fDate.getMonth()
        let fYear = fDate.getFullYear()
        router.push(`/events/${fYear}/${fMonth+1}`)
    }
    return (
        <div className="my-5">
            <h2 className="text-success my-2">
                All Events
            </h2>
            <InputGroup className="w-50 mx-auto shadow-lg my-3">
                <Input
                    type="date"
                    name="filter-data"
                    innerRef={date}
                />

                <Button onClick={filterSlugHandler} color="success">Apply</Button>
            </InputGroup>
            <hr />
            {events.map(event=>(
                <Event
                {...event}
                key={event.id}
                />
            ))}

        </div>
    )
}

export default EventPage