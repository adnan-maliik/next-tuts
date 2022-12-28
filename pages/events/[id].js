import Image from "next/image";
import { useRouter } from "next/router";
import Loader from "../../components/layout/Ui/Loader";
import ErrorMsg from "../../components/Ui/ErrorMsg";
import axiosInstance from "../../config/axiosInstance";

const EventDetailsPage = ({ event, hasError, message }) => {
  if (hasError) return <ErrorMsg msg={message} />;
  if (!event) return <Loader />;

  return (
    <>
      <div className="position-relative w-100 mt-2" style={{ height: "10rem" }}>
        <Image
          src={"/" + event.image}
          alt={event.title}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <h2 className="my-2 text-center text-primary">{event.title}</h2>
      <div className="w-75 mx-auto bg-dark text-center text-light rounded shadow my-3 p-3">
        {event.description}
      </div>
      <div className="my-2 w-50 mx-auto hstack gap-2 justify-content-between fw-bold">
        <div >
          <i className="fa fa-calendar"></i>
          {event.date}
        </div>
        <div>
          <i className="fa fa-home ms-2"></i> {event.location}
        </div>
      </div>
    </>
  );
};

export default EventDetailsPage;

export async function getStaticPaths() {
  try {
    const { data } = await axiosInstance.get("/events.json?shallow=true");
    if (!data) throw Error("No Data Found!");

    return {
      paths: Object.keys(data).map((key) => ({ params: { id: key } })),
      fallback: false,
    };
  } catch (error) {
    console.error(error);
    return {
      paths:[],
      fallback:true
    }
  }
}

export async function getStaticProps(context) {
  try {
    let id = context.params?.id;
    // console.log("current page id ", id);
    const { data } = await axiosInstance.get(`/events/${id}.json`);
    if (!data) throw Error("No Data Found!");
    return {
      props: {
        event: data,
      },
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
