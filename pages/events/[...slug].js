import { useRouter } from "next/router"
import Event from "../../components/events/Event"
import { getFilteredEvents} from "../../mock/data"

const FilteredEvents = () => {
  const {query:{slug}} = useRouter()
  const year = +slug[0] || 2000
  const month = +slug[1] || 1
  const events= getFilteredEvents(year,month-1)
    return ( <div className="my-5">
      {events.map(event=>(
        <Event
        key={event.id}
        {...event}
        />
      ))}
    </div>
  )
}

export default FilteredEvents