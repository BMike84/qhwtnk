import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants/index";

import { IoMdHeartDislike } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";

const navLinks = [
  {
    link: "#home",
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
  const [logoColor, setLogoColor] = useState(images.logo_white);
  const [borderColor, setBorderColor] = useState("");
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
        setLogoColor(images.logo_black);
        setBorderColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setLogoColor(images.logo_white);
        setBorderColor("#ffffff");
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
        <Link href="/" scroll={true} className="text-center">
          <Image src={logoColor} width={200} height={200} alt="logo" />
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex font-bold"
        >
          {navLinks.map((item, index) => (
            <li key={`${item}` + index} className="pl-5  hover:text-sky-500 ">
              <Link
                id="anchor"
                href={item.link}
                scroll={false}
                className="linkTag"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="hidden lg:block z-10 px-8 py-[0.40rem] border ease-in-out font-bold duration-300 rounded-3xl hover:bg-sky-500"
          style={{ color: `${textColor}`, border: `2px solid ${borderColor}` }}
        >
          Book Now
        </button>
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
          <ul className="flex flex-col">
            {navLinks.map((item, index) => (
              <li key={index} className="p-4 text-3xl hover:text-sky-500">
                <Link href={item.link}>{item.title}</Link>
              </li>
            ))}
            <button className="block text-2xl px-8 py-2 mt-3 border hover:bg-sky-800 ease-in-out duration-300">
              Book Now
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
