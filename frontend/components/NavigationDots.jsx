import React from "react";
import Link from "next/link";
const links = [
  "home",
  "featureservices",
  "meet",
  "featureblog",
  "youtubeBook",
  "testimonialsSection",
  "contact",
];
import { Tooltip } from "@nextui-org/react";

const NavigationDots = () => {
  return (
    <div className="hidden md:flex flex-col  justify-between h-auto gap-4 p-1 absolute md:top-1/3 md:right-4">
      {links.map((item, index) => (
        <Tooltip key={index} content={item} color="primary" placement="left">
          <Link
            href={`#${item}`}
            scroll={false}
            className="w-[15px] h-[15px]  rounded-full bg-gray-300 hover:bg-sky-500 active:bg-sky-500"
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default NavigationDots;
