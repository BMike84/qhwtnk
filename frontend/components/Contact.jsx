import React, { useState, useRef } from "react";
import Image from "next/image";
import images from "@/constants/images";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Copyright, NavigationDots, SocialMedia } from ".";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_subject: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user_name, user_email, user_subject, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);

    e.preventDefault();

    emailjs
      .sendForm(
        "service_3gaw26l",
        "template_31bbt7t",
        form.current,
        "PUrMfxdGI8-Tr0y_c"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section
      id="contact"
      className="relative bg-white text-white dark:bg-gray-900 p-4 scroll-mt-32"
    >
      <NavigationDots />
      <SocialMedia />
      <Copyright />
      <div className="py-8 lg:py-16 px-4 mb-14">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 3 }}
          className="flex flex-col justify-center items-center gap-3 lg:gap-10 md:gap-2 md:flex-row md:items-center mb-10 max-w[800px]"
        >
          <Image
            alt="spiritual"
            width={250}
            height={200}
            src={images.spiritual}
            className="md:block rounded-xl hover:scale-105 ease-in duration-300 md:w-[200px] lg:w-[250px]"
          />
          <div className="">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Contact Us
            </h2>
            <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              For General Inquiries and Bookings
            </p>
            <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Email: QuantumHealingwithTena@gmail.com
            </p>
          </div>
          <Image
            alt="spiritual"
            width={250}
            height={200}
            src={images.spiritual}
            className="hidden md:block rounded-xl hover:scale-105 ease-in duration-300 md:w-[200px] lg:w-[250px]"
          />
        </motion.div>
        {!isFormSubmitted ? (
          <form ref={form} className="space-y-8 max-w-screen-md mx-auto">
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                value={user_name}
                onChange={handleChangeInput}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light mb-3"
                placeholder="Jane Doe"
                required
              />
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                value={user_email}
                onChange={handleChangeInput}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                name="user_subject"
                id="subject"
                value={user_subject}
                onChange={handleChangeInput}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                value={message}
                name="message"
                onChange={handleChangeInput}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-2 border-2 border-white h font-bold text-white uppercase hover:bg-white hover:text-black ease-in duration-200"
              >
                {loading ? "Sending" : "Send Message"}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-gray-400 flex flex-col items-center text-2xl gap-2">
            <h3>Thank you for getting in touch.</h3>
            <h3>We'll get back to you within 24hrs.</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
