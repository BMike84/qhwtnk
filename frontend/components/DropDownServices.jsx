import React, { useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const servicesLinks = [
  {
    title: "BEYOND QUANTUM HEALING (BQH)",
    link: "/#bqh",
  },
  {
    title: "REMOTE SPIRIT RELEASE (RSR)",
    link: "/#rsr",
  },
  {
    title: "MENTORSHIP & EMPOWERMENT PACKAGES",
    link: "/#mentorship",
  },
  {
    title: "COVIDx CLEARING",
    link: "/#covidclearing",
  },
  {
    title: "All",
    link: "/#featureservices",
  },
];

const DropDownServices = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>Services</Menu.Button>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
            {servicesLinks.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <Link
                    href={item.link}
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDownServices;