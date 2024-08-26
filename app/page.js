import Link from "next/link";

const Homepage = () => {
  console.log("home page");
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.js </h1>
      <Link href="/client" className="btn btn-accent">
        get started
      </Link>
    </div>
  );
};

export default Homepage;
