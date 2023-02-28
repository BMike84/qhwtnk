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

const NavigationDots = () => {
  return (
    <div className="hidden md:flex flex-col justify-between h-auto gap-4 p-1 absolute md:top-1/3 md:right-4">
      {links.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="w-[15px] h-[15px]  rounded-full bg-gray-300 hover:bg-gray-500 active:bg-gray-500"
        />
      ))}
    </div>
  );
};

export default NavigationDots;
