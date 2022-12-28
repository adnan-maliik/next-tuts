import Link from "next/link";
import EventCard from "../components/Event/EventCard";
import Jumbotron from "../components/layout/Featured/Jumbotron";
import Loader from "../components/layout/Ui/Loader";
import ErrorMsg from "../components/Ui/ErrorMsg";
import axiosInstance from "../config/axiosInstance";
import { convertFirebaseObjectToArray } from "../util/util";

export default function Home({ events, hasError, message }) {
  if (hasError) {
    return <ErrorMsg msg={message} />;
  }
  if (!events) {
    return <Loader />;
  }
  const featuredEvents = convertFirebaseObjectToArray(events);
  return (
    <div>
      <Jumbotron />
      {featuredEvents.map((doc) => (
        <EventCard key={doc.id} {...doc} />
      ))}
      <div className="text-center">
        <Link href="/events"  legacyBehavior passHref>
          <a
            className="btn btn-primary btn-lg   mb-5 rounded-pill shadow-lg w-75 mx-auto"
            role="button"
          >
            View All
          </a>
        </Link>
      </div>
    </div>
  );
}
// console.log('environment => ',process.env);
export async function getStaticProps() {
  try {
    // console.log("inside [getStaticProps] of Next Js Events");
    const { data } = await axiosInstance.get(
      '/events.json?orderBy="isFeatured"&equalTo=true'
    );
    return {
      props: {
        events: data,
      },
      revalidate: 30, // generate this page with updated data after 30 seconds in production build
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
