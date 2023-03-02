import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants/index";
import { motion } from "framer-motion";
import { IoMdHeartDislike } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";

const navLinks = [
  {
    link: "#home",
    title: "Home",
  },
  {
    link: "/#featureservices",
    title: "Services",
  },
  {
    link: "/#featureblog",
    title: "Blog",
  },
  {
    link: "/#contact",
    title: "Contact",
  },
  {
    link: "/#book",
    title: "Book Now",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [navColor, setNavColor] = useState(false);
  const [logoColor, setLogoColor] = useState(false);
  const [buttonColor, setButtonColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setNavColor(true);
      setLogoColor(true);
      setButtonColor(true);
    } else {
      setNavColor(false);
      setLogoColor(false);
      setButtonColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={
        navColor
          ? "fixed left-0 top-0 w-full z-10 ease-in duration-300 bg-white  text-black font-bold flex justify-between items-center py-4 px-8 "
          : "fixed left-0 top-0 w-full z-10 ease-in duration-300  text-white font-bold flex justify-between items-center py-4 px-8 "
      }
    >
      <div className="app__navbar-logo">
        <Link href="/" scroll={true} className="text-center">
          {logoColor ? (
            <Image
              src={images.logo_black}
              width={200}
              height={200}
              alt="logo"
            />
          ) : (
            <Image
              src={images.logo_white}
              width={200}
              height={200}
              alt="logo"
            />
          )}
        </Link>
      </div>
      <ul className="hidden flex-1 justify-center items-center gap-5 md:flex">
        {navLinks.map((item) =>
          item.title === "Book Now" ? (
            <li key={`link-${item.title}`}>
              <Link className="hidden" href={item.link}>
                {item.title}
              </Link>
            </li>
          ) : (
            <li key={`link-${item.title}`}>
              <Link href={item.link}>{item.title}</Link>
            </li>
          )
        )}
      </ul>
      <Link
        href="/"
        className={
          buttonColor
            ? "hidden md:block border-2  border-black z-10 px-3 py-[0.33rem] ease-in-out font-bold duration-300 rounded-3xl"
            : "hidden md:block border-2 z-10 px-3 py-[0.33rem] ease-in-out font-bold duration-300 rounded-3xl"
        }
      >
        Book Now
      </Link>

      <div className="relative md:hidden">
        <FaHandHoldingHeart onClick={() => setToggle(true)} />

        {toggle && (
          <>
            <motion.div
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 z-[5] p-4 w-[80%] h-screen flex justify-end items-end flex-col bg-black"
            >
              <IoMdHeartDislike onClick={() => setToggle(false)} />
              <ul className="h-full w-full">
                {navLinks.map((item, index) => (
                  <li key={index} className="m-4">
                    <Link href={item.link} onClick={() => setToggle(false)}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
