import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="absolute top-5 w-[90%] text-xs md:text-lg font-semibold text-gray-800">
      <ul className="flex md:justify-evenly justify-between text-center gap-4">
        <Link
          href="/whatIs/bqh"
          className=" md:border-b border-black hover:scale-105"
        >
          What Is BQH
        </Link>
        <Link
          href="/whatIs/sessions"
          className=" md:border-b border-black hover:scale-105"
        >
          Session Parts and Hypnosis
        </Link>
        <Link
          href="/whatIs/prepare"
          className=" md:border-b border-black hover:scale-105"
        >
          How To Prepare
        </Link>
        <Link
          href="/whatIs/resources"
          className=" md:border-b border-black hover:scale-105"
        >
          Resources
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
