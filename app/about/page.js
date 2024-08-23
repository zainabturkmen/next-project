import Link from "next/link";

const Aboutpage = () => {
  return (
    <div>
      <h1>aboutmpage</h1>
      <Link
        href="/"
        className="text-white px-4 py-2 m-4 bg-slate-500 rounded-xl ">
        Back Home
      </Link>
    </div>
  );
};

export default Aboutpage;
