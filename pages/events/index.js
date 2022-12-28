import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import { Button, Container, Input, InputGroup } from "reactstrap";
import EventCard from "../../components/Event/EventCard";
import Loader from "../../components/layout/Ui/Loader";
import ErrorMsg from "../../components/Ui/ErrorMsg";
import axiosInstance from "../../config/axiosInstance";
import { convertFirebaseObjectToArray } from "../../util/util";

const EventsPage = ({ events, hasError, message }) => {
  const router=useRouter()
  const dateRef= useRef()

  if (hasError) return <ErrorMsg msg={message} />;
  if (!events) return <Loader />;
  const filterHandler = ()=>{
    let filterDate= dateRef.current.value
    if(!filterDate) return 
    router.push(`/events/${new Date(filterDate).getFullYear()}/${new Date(filterDate).getMonth()+1}`)

  }
  const transformedEvents = convertFirebaseObjectToArray(events);
  return (
    <>
      <Head>
        <title>NextJs / Events</title>
      </Head>
      <Container className="my-5">
        <h1 className="bg-primary w-50 mx-auto p-2 my-3 shaodow rounded-pill text-light text-center">
          All Events
        </h1>
        <InputGroup>
          <Input 
          innerRef={dateRef}
          type="date" 
          min={'2021-01-01'}
          max={new Date().toISOString().split('T')[0]}
           />
          <Button onClick={filterHandler} color="primary">Apply</Button>
        </InputGroup>
        {transformedEvents.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </Container>
    </>
  );
};

export default EventsPage;

export async function getStaticProps() {
  try {
    console.log("inside [getStaticProps] Events Page");
    const { data: events } = await axiosInstance.get("/events.json");
    if (!events) return { notFound: true };
    // console.log(events);
    return {
      props: {
        events,
      },
      revalidate: 1800,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        hasError: true,
        message: error.message,
      },
    };
  }
}
