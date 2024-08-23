import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/about" className="px-4 py-2 bg-slate-600 text-white">
        about page
      </Link>
    </div>
  );
};

export default Homepage;
