import { useRouter } from "next/router";
import ErrorMsg from "../components/layout/Ui/ErrorMsg"
import From from "../components/Subs/From";
export default function Home({ hasError, data }) {
  const router=useRouter()
  if (hasError || !data) return <ErrorMsg message={'Failed to found Data!'} />
  const addHandler = (paylaod) => {
    fetch('/api/sub', {
      method: 'POST',
      body: JSON.stringify(paylaod),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      if(data){
        router.replace(router.asPath)
      }
    })
}
return (
  <div>
    <h1 className="display-5 text-center fw-bold mt-3 text-primary">
      Subcribe to Our NewsLetter
    </h1>
    <From
      addHanlder={addHandler}
    />
    <ul>
      {data.map(subscriber => (
        <li key={subscriber._id} className='lead text-uppercase'>
          <h5>{subscriber.name}</h5>
          <small>{subscriber.email}</small>
        </li>
      ))}

    </ul>
  </div>
);
}
// console.log('environment => ',process.env);


export async function getServerSideProps() {
  try {
    let result = await fetch('http://localhost:3000/api/sub')
    let data = await result.json()
    if (!data) {
      return {
        notFound: true
      }
    }
    return {
      props: {
        data
      }
    }
  } catch (error) {
    console.log(error.message);
    return {
      props: {
        hasError: true,
        message: error.message
      }
    }
  }
}
