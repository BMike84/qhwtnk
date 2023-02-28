import React from "react";
const links = [
  "home",
  "services",
  "meet",
  "blog",
  "youtubeBook",
  "testimonials",
  "contact",
];
import { Tooltip } from "@nextui-org/react";

const NavigationDots = () => {
  return (
    <div className="hidden md:flex flex-col justify-between h-auto gap-4 p-1 absolute md:top-1/3 md:right-10">
      {links.map((item, index) => (
        <Tooltip content={item} color="primary">
          <a
            href={`#${item}`}
            key={item + index}
            className="w-[15px] h-[15px]  rounded-full bg-gray-300 hover:bg-sky-500 active:bg-sky-500"
          />
        </Tooltip>
      ))}
    </div>
  );
};

export default NavigationDots;
