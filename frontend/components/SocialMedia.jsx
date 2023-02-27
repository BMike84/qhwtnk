import React from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="hidden md:absolute md:bottom-3  md:left-4 md:flex gap-3 justify-end items-start p-4">
      <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-gray-200 my-1 transition-all ease-in-out duration-300 hover:bg-gray-400">
        <a
          href="https://www.facebook.com/QuantumHealingwithTena/"
          target="blank"
          className="w-8"
        >
          <BsFacebook className="text-black w-[100%] h-10" />
        </a>
      </div>
      <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-gray-200 my-1 transition-all ease-in-out duration-300 hover:bg-gray-400">
        <a
          href="https://www.instagram.com/quantumhealingwithtena/"
          target="blank"
          className="w-8"
        >
          <BsInstagram className="text-black w-[100%] h-10" />
        </a>
      </div>
      <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-gray-200 my-1 transition-all ease-in-out duration-300 hover:bg-gray-400">
        <a
          href="https://www.youtube.com/channel/UCWj-EtHf2bigx5G0MbRf8Pg?app=desktop"
          target="blank"
          className="w-8"
        >
          <BsYoutube className="text-black w-[100%] h-10" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
