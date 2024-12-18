import Link from "next/link";
import React from "react";

const SourceCodePage = () => {
  return (
    <div>
      <h1 className="text-7xl">SourceCodePage</h1>
      <Link href="/thank" className="">
        <p className="text-3xl mr-4 hover:bg-violet hover:text-white">
          Thank
        </p>
      </Link>
      <Link href="/portfolio" className="">
        <p className="text-3xl mr-4 hover:bg-violet hover:text-white">
          Portfolio
        </p>
      </Link>
      <Link href="/" className="">
        <p className="text-3xl hover:bg-violet hover:text-white">Home</p>
      </Link>
    </div>
  );
};

export default SourceCodePage;
