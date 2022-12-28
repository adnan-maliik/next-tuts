import Error from "next/error";
import { Alert } from "reactstrap";
import EventCard from "../../components/Event/EventCard";
import ErrorMsg from "../../components/Ui/ErrorMsg";
import axiosInstance from "../../config/axiosInstance";

const FilteredEventsPage = ({events,hasError,message}) => {
  if(hasError) return <ErrorMsg msg={message} />
  if(!events || !events.length) return <Alert color="pimary" className="m-5" >No Events Found!</Alert>
  return (
    events.map(event=>(
      <EventCard
      key={event.id}
      {...event}
      />
    ))
  )
}




export default FilteredEventsPage

export async function getServerSideProps(context) {
  console.log('inside getServerSideProps[context]');
  const {query:{slug}} = context
  try {
    let filterDate = new Date(`${slug[0]}-${slug[1]}`)
    if(filterDate.getFullYear()>2022 || filterDate.getFullYear()<2021) return {
      props:{
        hasError:true,
        message:'Invalid Date!'
      }
    }

    const {data:fetchedEvents} = await axiosInstance.get(`/events.json?orderBy=%22date%22`)
    const filteredEvents = fetchedEvents.filter(event=>{
      let cYear = new Date(event.date).getFullYear() 
      let cMonth = new Date(event.date).getMonth()+1
      if(cYear === parseInt(slug[0]) || cMonth === parseInt(slug[1])) return true
    })
    return {
      props:{
        events:filteredEvents
      }
    }
  } catch (error) {
    console.log('error =>  ' , error);
    return {
      notFound:true
    }
  }
}

function buildErrorHelper(message) {
     return new Error(message)
}