import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import images from "@/constants/images";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Copyright, NavigationDots, SocialMedia } from ".";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e, data) => {
    // e.preventDefault();

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
    reset();
  };
  return (
    <section
      id="contact"
      className="relative bg-gray-900  text-white py-10 px-4 md:px-14 scroll-mt-24"
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
          <div>
            <h2 className="mb-4 text-2xl lg:text-4xl tracking-tight font-extrabold text-center  text-white">
              Contact Us
            </h2>
            <p className="font-light text-center  text-gray-400 sm:text-lg lg:text-xl ">
              For General Inquiries and Bookings
            </p>
            <p className="font-light text-center text-gray-400 sm:text-lg lg:text-xl">
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
          <form
            onSubmit={handleSubmit(sendEmail)}
            ref={form}
            className="space-y-8 max-w-screen-md mx-auto px-4"
          >
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                className="shadow-sm  border text-sm rounded-lg ring-primary-500 border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-primary-500 border-primary-500 shadow-sm-light"
                placeholder="Enter Name"
                {...register("user_name", { required: true })}
              />
              {errors.user_name && (
                <p className="text-red-500">Name is required.</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="shadow-sm  border text-sm rounded-lg ring-primary-500 border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-primary-500 border-primary-500 shadow-sm-light"
                {...register("user_email", { required: true })}
              />
              {errors.user_name && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Subject</label>
              <input
                type="text"
                name="user_subject"
                className="shadow-sm  border text-sm rounded-lg ring-primary-500 border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-primary-500 border-primary-500 shadow-sm-light"
                placeholder="What Subject?"
                {...register("user_subject", { required: true })}
              />
              {errors.user_name && (
                <p className="text-red-500">Subject is Required</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="Enter your message"
                name="message"
                className="shadow-sm  border text-sm rounded-lg ring-primary-500 border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-primary-500 border-primary-500 shadow-sm-light"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">Please fill out this field.</p>
              )}
            </div>
            <div className="col-md-6 text-center text-md-left py-2 py-md-0">
              <input
                id="contact-btn"
                className="px-8 py-2 border border-white text-sm font-bold text-white uppercase hover:bg-white hover:text-black ease-in duration-200"
                type="submit"
                value="Submit Now"
              />
            </div>
          </form>
        ) : (
          <div className="text-gray-200 flex flex-col items-center text-sm lg:text-2xl gap-2">
            <h3>Thank you for getting in touch.</h3>
            <h3>Give us 24-48hrs to get back to you.</h3>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
