import Image from "next/image";
import NewsLetter from "../components/layout/Form/NewsLetter";

export default function Home() {
  return (
    <div>
      <h1 className="display-1 text-center fw-bold mt-3 text-primary">
        Subscribe to Our NewsLetter
      </h1>
      <div
        className="position-relative w-75 mx-auto"
        style={{ height: "10rem" }}
      >
        <Image
          src="/images/sample.jpg"
          sizes="100%"
        fill style={{ objectFit: "cover" }} alt='sample mountain' />
      </div>
      <NewsLetter />
    </div>
  );
}
// console.log('environment => ',process.env);
