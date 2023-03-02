import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const socialLinks = [
  {
    icon: <BsFacebook className="text-black w-[100%] h-5 md:h-10" />,
    link: "https://www.facebook.com/QuantumHealingwithTena/",
    class: `className="text-black w-[100%] h-5 md:h-10"`,
  },
  {
    icon: <BsInstagram className="text-black w-[100%] h-5 md:h-10" />,
    link: "https://www.instagram.com/quantumhealingwithtena/",
    class: `className="text-black w-[100%] h-5 md:h-10"`,
  },
  {
    icon: <BsYoutube className="text-black w-[100%] h-5 md:h-10" />,
    link: "https://www.youtube.com/channel/UCWj-EtHf2bigx5G0MbRf8Pg?app=desktop",
    class: `className="text-black w-[100%] h-5 md:h-10"`,
  },
];

const SocialMedia = () => {
  return (
    <div className="absolute bottom-3 left-4 flex gap-3 justify-end items-start p-4">
      {socialLinks.map((item) => (
        <div className="flex justify-center items-center w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-gray-200 my-1 transition-all ease-in-out duration-300 hover:bg-gray-400">
          <Link href={item.link} target="blank" className="w-8">
            {item.icon}
          </Link>
        </div>
      ))}
      {/* <div className="flex justify-center items-center w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-gray-200 my-1 transition-all ease-in-out duration-300 hover:bg-gray-400">
        <a
          href="https://www.facebook.com/QuantumHealingwithTena/"
          target="blank"
          className="w-8"
        >
          <BsFacebook className="text-black w-[100%] h-5 md:h-10" />
        </a>
      </div>
      <div className="flex justify-center items-center w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-gray-200 my-1 transition-all ease-in-out duration-300 hover:bg-gray-400">
        <a
          href="https://www.instagram.com/quantumhealingwithtena/"
          target="blank"
          className="w-8"
        >
          <BsInstagram className="text-black w-[100%] h-5 md:h-10" />
        </a>
      </div>
      <div className="flex justify-center items-center w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full bg-gray-200 my-1 transition-all ease-in-out duration-300 hover:bg-gray-400">
        <a
          href="https://www.youtube.com/channel/UCWj-EtHf2bigx5G0MbRf8Pg?app=desktop"
          target="blank"
          className="w-8"
        >
          <BsYoutube className="text-black w-[100%] h-5 md:h-10" />
        </a>
      </div> */}
    </div>
  );
};

export default SocialMedia;
