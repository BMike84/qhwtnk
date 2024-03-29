import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants/index";
import { motion } from "framer-motion";
import { IoMdHeartDislike } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
import { DropDownServices, DropDownWhatIs } from "..";

import navLinks from "./menuLinks";
import CalendlyButton from "../calendly/CalendlyButton";

const Navbar = ({ className }) => {
  const [toggle, setToggle] = useState(false);
  //change colors on scroll
  const [navColor, setNavColor] = useState(false);
  const [logoColor, setLogoColor] = useState(false);
  const [buttonColor, setButtonColor] = useState(false);

  //pass to dropdown on mobile meny
  const toggleOnClick = () => {
    setToggle(false);
  };

  //changes colors on scroll
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setNavColor(true);
      setLogoColor(true);
      setButtonColor(true);
    } else {
      setNavColor(false);
      setLogoColor(false);
      setButtonColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });

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
      <ul className="hidden flex-1 justify-center items-center gap-5 md:flex md:text-sm lg:text-base">
        <li>
          <Link href="/" className="hover:text-sky-500">
            Home
          </Link>
        </li>
        {navLinks.map((item, index) =>
          item.title === "Book Now" ? (
            <li key={`link-${item.title}`}>
              <Link className="hidden" href={item.link} scroll={true}>
                {item.title}
              </Link>
            </li>
          ) : item.title === "What Is?" ? (
            <DropDownWhatIs key={index + 7} />
          ) : (
            <li key={`link-${item.title}`}>
              <Link
                scroll={false}
                href={item.link}
                className="hover:text-sky-500"
              >
                {item.title}
              </Link>
            </li>
          )
        )}
      </ul>
      <CalendlyButton
        className={
          buttonColor
            ? "hidden md:block md:text-xs lg:text-sm border-2  border-black z-10 px-4 py-[0.33rem] ease-in-out font-bold duration-300 hover:text-sky-500"
            : "hidden md:block md:text-xs lg:text-sm border-2 z-10 px-4 py-[0.33rem] ease-in-out font-bold duration-300 hover:text-sky-500"
        }
      />
      {/* 
      <Link
        target="_blank"
        href="https://calendly.com/michael-3382"
        className={
          buttonColor
            ? "hidden md:block md:text-xs lg:text-sm border-2  border-black z-10 px-4 py-[0.33rem] ease-in-out font-bold duration-300 hover:text-sky-500"
            : "hidden md:block md:text-xs lg:text-sm border-2 z-10 px-4 py-[0.33rem] ease-in-out font-bold duration-300 hover:text-sky-500"
        }
      >
        Book Now
      </Link> */}

      <div className="relative md:hidden">
        <FaHandHoldingHeart onClick={() => setToggle(true)} />

        {toggle && (
          <>
            <motion.div
              whileInView={{ x: [200, 0] }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 z-[5] p-4 w-[80%] h-screen flex justify-end items-end flex-col bg-black text-white"
            >
              <IoMdHeartDislike onClick={() => setToggle(false)} />
              <ul className="relative h-full w-full flex flex-col items-left gap-5 pt-8">
                <li>
                  <Link href="/" onClick={() => setToggle(false)}>
                    Home
                  </Link>
                </li>
                {navLinks.map((item, index) =>
                  item.title === "What Is?" ? (
                    <DropDownWhatIs key={index} close={toggleOnClick} />
                  ) : (
                    <li key={`link-${item.title}`}>
                      <Link
                        href={item.link}
                        className="hover:text-sky-500"
                        onClick={() => setToggle(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
                )}
                <CalendlyButton
                  href="/"
                  className="absolute top-80 mt-10  border-2 z-10 px-3 py-[0.33rem] ease-in-out font-bold duration-300 rounded-3xl hover:text-sky-500"
                />
              </ul>
            </motion.div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
