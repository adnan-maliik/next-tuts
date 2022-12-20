import Event from "../components/events/Event"
import {getFeaturedEvents} from "../mock/data"

export default function Home() {
  const events= getFeaturedEvents()
  return (
   <div>
    <h1 className="display-1 text-center fw-bold mt-3 text-primary">
      Featured Events
    </h1>
    {events.map(event=>(
      <Event
      key={event.id}
      {...event}
      />
    ))}


   </div>
  )
}
