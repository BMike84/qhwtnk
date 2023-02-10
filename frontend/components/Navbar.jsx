import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { IoMdHeartDislike } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";

const navLinks = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/#services",
    title: "Services",
  },
  {
    link: "/#blog",
    title: "Blog",
  },
  {
    link: "/#contact",
    title: "Contact",
  },
];

const Navbar = () => {
  // open close menu for navbar mobile
  const [nav, setNav] = useState(false);
  //change navbar menu on scroll
  const [color, setColor] = useState("");
  const [textColor, setTextColor] = useState("");
  // open close menu for navbar mobile
  const handleNav = () => {
    setNav(!nav);
  };
  // change navbar menu on scroll
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 50) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1440px]  flex justify-between items-center px-7 py-4 text-white">
        <Link href="/" className="text-center">
          <h1
            style={{ color: `${textColor}` }}
            className="font-bold text-lg md:text-4xl"
          >
            QHWT&K
          </h1>
          <p
            style={{ color: `${textColor}` }}
            className="font-bold text-xs md:text-lg"
          >
            QUANTUM HEALING with TENA & KAREN
          </p>
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex font-bold"
        >
          {navLinks.map((item, index) => (
            <li className="pl-5 hover:text-sky-500 ">
              <Link href={item.link}>{item.title}</Link>
            </li>
          ))}
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <IoMdHeartDislike size={20} style={{ color: `${textColor}` }} />
          ) : (
            <FaHandHoldingHeart size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            {navLinks.map((item, index) => (
              <li className="p-4 text-4xl hover:text-sky-500">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
