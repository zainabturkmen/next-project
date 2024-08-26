"use client";
import { useState } from "react";
import Link from "next/link";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <di>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </di>
  );
};

export default ClientPage;
