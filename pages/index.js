import Link from "next/link";
import { Button } from "reactstrap";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="display-1 text-center fw-bold mt-3 text-primary">
        Next Js Basics
      </h1>
      <div className="position-relative w-75 mx-auto" style={{"height":"10rem"}}>
        <Image src='/images/sample.jpg' fill  alt='sample mountain'  />
      </div>
      <Button color="primary" tag={Link} href='/posts' className="my-5 w-25 mx-auto">
        View Posts
      </Button>
    </div>
  );
}
// console.log('environment => ',process.env);
