import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="absolute top-5 w-[90%] text-xs md:text-lg font-semibold text-gray-800">
      <ul className="flex md:justify-evenly justify-between text-center gap-4">
        <Link
          href="/whatBqh/what-is"
          className=" md:border-b border-black hover:scale-105"
        >
          What Is BQH
        </Link>
        <Link
          href="/whatBqh/sessions"
          className=" md:border-b border-black hover:scale-105"
        >
          Session Parts and Hypnosis
        </Link>
        <Link
          href="/whatBqh/prepare"
          className=" md:border-b border-black hover:scale-105"
        >
          How To Prepare
        </Link>
        <Link
          href="/whatBqh/resources"
          className=" md:border-b border-black hover:scale-105"
        >
          Resources
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
