// import os from "os"
import Link from "next/link";
import {
  Alert,
  CardFooter,
  CardImg,
  CardTitle,
  Row,
  Col,
  Card,
  Button,
} from "reactstrap";
import useSwr from "swr";
import useSwrMutation from "swr/mutation";
import Loader from "../../components/layout/Ui/Loader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const addPostMutation = (url, test) => {
  const { args } = test;
  console.log(test);
  console.log(url);
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(args),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then((response) => response.json());
};

const SSRPage = (props) => {
  const {
    data: users,
    isLoading,
    error,
  } = useSwr("https://api.github.com/users", fetcher);
  const { data,trigger, isMutating } = useSwrMutation("https://jsonplaceholder.typicode.com/posts", addPostMutation);
  //   console.log("data ", data);
//   console.log("loading ", isLoading);
//   console.log("error ", error);
  console.log('mutation data ',data);
  if (isLoading) return <Loader />;
  if (error) return <Alert>{JSON.stringify(error)}</Alert>;
  if (isMutating) return <h1>adding post...</h1>;
  if(!users) return <h5>No Users found</h5>
  return (
    <div className="my-5">
      <Row>
        {users.map((user) => (
          <Col sm={3} md={2} key={user.id}>
            <Card>
              <CardTitle>{user.login}</CardTitle>
              <CardImg src={user.avatar_url} alt={user.login} />
              <CardFooter>
                <Link href={user.html_url}>{user.html_url}</Link>
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
      <Button
        color="primary"
        onClick={async() => {
            try {
                const res=await trigger({
                  title: "foo",
                  body: "bar",
                  userId: 1,
                });
                console.log('post request response => ',res);
                
            } catch (error) {
                console.error(error);
            }
        }}
      >
        Add New Post
      </Button>
    </div>
  );
};

export default SSRPage;

export async function getServerSideProps(context) {
  const { req, res } = context;
  console.log("url => ", context.resolvedUrl);

  try {
  } catch (error) {
    return {
      notFound: true,
    };
  }
  // console.log(os.platform());
  // if(true){
  //     return {
  //         // notFound:true
  //         redirect:{
  //             destination:'/',
  //         }
  //     }
  // }
  return {
    props: {
      author: "Adnan Malik",
    },
  };
}
