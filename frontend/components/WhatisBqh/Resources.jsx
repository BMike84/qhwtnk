import React from "react";
import Link from "next/link";
import Nav from "./Nav";
import { Copyright, SocialMedia } from "@/components";

const Resources = () => {
  return (
    <section className=" bg-gray-900 h-screen py-28">
      <div className=" relative flex flex-col gap-4 bg-[#F8F4EA] py-12 px-8 items-center text-center">
        <Nav />
        <SocialMedia />
        <Copyright />
        <h2 className="my-6 text-base md:text-2xl font-bold text-center uppercase">
          Resources
        </h2>
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold uppercase">BQH Session Preparation</h2>
          <div className="flex flex-col text-center gap-2  underline text-red-700 hover:text-red-900 font-semibold">
            <Link
              className=""
              href="https://quantumhealers.com/get-ready"
              target="_blank"
            >
              Get Ready for your Session
            </Link>
            <Link
              className=""
              href="http://ww7.quantumhealingpractitioners.com/blog/nine-ways-to-prepare-for-a-quantum-healing-or-qhht-session-56"
              target="_blank"
            >
              Nine Ways to Prepare for your Session
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-2">
          <h2 className="font-semibold uppercase">
            For Clients with a Strong Conscious Mind
          </h2>
          <div className="flex flex-col text-center gap-2 underline text-red-700 hover:text-red-900 font-semibold">
            <Link
              href="https://candacecrawgoldman.com/dear-left-brained-client/"
              target="_blank"
            >
              Dear Left-Brained Client
            </Link>
            <Link
              href="https://candacecrawgoldman.com/qhht-and-making-it-up/"
              target="_blank"
            >
              Making it Up
            </Link>
            <Link
              href="https://quantumhealers.com/blog/the-language-of-your-higher-self-717"
              target="_blank"
            >
              Language of HS
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold uppercase">HYPNOSIS</h2>
          <div className="flex flex-col text-center gap-2 underline text-red-700 hover:text-red-900 font-semibold">
            <Link
              href="https://quantumhealers.com/blog/i-had-a-qhht%c2%ae-session-but-could-not-be-hypnotized-506"
              target="_blank"
            >
              I Couldn't Be Hypnotized
            </Link>
            <Link
              href="https://quantumhealers.com/blog/debunking-myths-about-hypnosis-in-quantum-healing-sessions"
              target="_blank"
            >
              Debunking Hypnosis Myths
            </Link>
            <Link
              href="https://quantumhealers.com/blog/i-cant-be-hypnotizedand-other-hypnosis-myths-61"
              target="_blank"
            >
              I Can't Be Hypnotized and Other Hypnosis Myths
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold uppercase">
            Practice Regressions & Visualizations
          </h2>
          <div className="flex flex-col text-center gap-3 underline text-red-700 hover:text-red-900 font-semibold">
            <Link
              href="https://www.youtube.com/watch?v=Dw55twDE0_U"
              target="_blank"
            >
              444 PORTAL Guided Meditation
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=PJWGV3QKIks"
              target="_blank"
            >
              Allison Coe for Worldwide Regression Week
            </Link>
            <Link href="https://vimeo.com/268261488/bc7e5d56de" target="_blank">
              Here is a story about and a chance to briefly practice
              "visualization" in a regression featuring practitioners Candace
              Craw-Goldman and Alice Mixer
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=SoH5V5BiAFA"
              target="_blank"
            >
              Here is a lovely guided imagery journey called Seaside to
              Starship, another way to practice for your session
            </Link>
            <Link
              href="https://www.youtube.com/playlist?list=PLAWsIROSOlPwf4yzJZAQUQ77thcs656m1"
              target="_blank"
            >
              A majority of our main events for Quantum Healers last year were
              guided meditations, here's that playlist ​
            </Link>
          </div>
        </div>
        <h2 className="mt-6 mb-12 font-semibold">
          Looking forward to your JOURNEY!
        </h2>
      </div>
    </section>
  );
};

export default Resources;
