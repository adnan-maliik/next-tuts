import Link from "next/link";
import { Button } from "reactstrap";

export default function Home() {
  return (
    <div>
      <h1 className="display-1 text-center fw-bold mt-3 text-primary">
        Next Js Basics
      </h1>
      <Button color="primary" tag={Link} href='/posts' className="my-5 w-25 mx-auto">
        View Posts
      </Button>
    </div>
  );
}
