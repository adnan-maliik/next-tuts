import path from "path";
import fs from "fs/promises";
import Link from "next/link";
import { Button, Card, CardBody, CardTitle } from "reactstrap";

function PostsPage(props) {
//   console.log("inside react component => ", props);
  const { posts } = props;
  return posts.map(({ id, title }) => (
    <Card key={id} className='mt-2'>
      <CardTitle>
        <h1 className="text-center">{title}</h1>
      </CardTitle>
      <CardBody>
        <Button 
        tag={Link}
        href={`/posts/${id}`}
        className="float-end">Read More.</Button>
      </CardBody>
    </Card>
  ));
}

export async function getStaticProps(context) {
    // console.log('inside [getSaticProps() "Posts"]');
  const buffer = await fs.readFile(path.join(process.cwd(), "mock", "db.json"));
  const posts = JSON.parse(buffer);

  if (!posts)
    return {
        //   notFound: true,
        redirect:{
            destination:'/',
            statusCode:307 
            // https://cheatography.com/kstep/cheat-sheets/http-status-codes/
        }
    };

  return {
    props: {
      posts,
      revalidate:5
    },
  };
}

export default PostsPage;
