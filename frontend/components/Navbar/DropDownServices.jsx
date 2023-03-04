import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { AiFillCaretDown } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const servicesLinks = [
  {
    title: "All Services",
    link: "/#featureservices",
  },
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
];

const DropDownServices = ({ close }) => {
  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <Menu.Button className="flex items-center gap-1 hover:text-sky-500">
        <span>Services</span>
        <AiFillCaretDown />
      </Menu.Button>
      <Transition
        as={Fragment}
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
                    onClick={close}
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
