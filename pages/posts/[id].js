import { useRouter } from "next/router"
import { Button, Spinner } from "reactstrap";
import { readPostsJson } from "../../lib/data";
import Link from "next/link";

const notFoundOptions={
  notFound:true
}
export default function PostDetailPage(props) {
    const router = useRouter()
    if(router.isFallback) return (
      <div className="my-3 text-center">
        <Spinner color="primary" />  
      </div>
    )
    const {post} = props
  return (
    <div>
        <h1>Post Details Page</h1>
        <h5>{post.title}</h5>
        <h5>{post.description}</h5>
        <div className="my-3">
          <Button className="float-end" tag={Link} href='/posts' >
            Go Back
          </Button>
        </div>
    </div>
  )
}



export async function getStaticPaths(context) {
  console.log('context => of stactic paths',context);
  const posts= await readPostsJson()
  const staticPathList= posts.map(post=>({ params: { id: post.id.toString() }}))
  return {
    paths:staticPathList,
    fallback:true
  }
  
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
    console.log('context => of static props ' ,context);
    const {params} = context
    const posts=await readPostsJson()
    if(!posts) return notFoundOptions
    const foundPost=await posts.find(post=>post.id.toString()===params.id)
    if(!foundPost) return notFoundOptions
    return {
      // Passed to the page component as props
      props: { post: foundPost},
    }
}