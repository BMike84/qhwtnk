import { useState } from "react";
import { useForm } from "react-hook-form";
import { SocialMedia, Copyright } from "@/components";

export function CommentForm({ _id }) {
  const [formData, setFormData] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    let response;
    setFormData(data);
    try {
      response = await fetch("/api/createComment", {
        method: "POST",
        body: JSON.stringify(data),
        type: "application/json",
      });
      setIsSubmitting(false);
      setHasSubmitted(true);
      console.log("id:", _id);
    } catch (err) {
      setFormData(err);
    }
  };

  if (isSubmitting) {
    return <h3 className="text-[#c7bb9d]">Submitting comment…</h3>;
  }
  if (hasSubmitted) {
    return (
      <>
        <h3 className="text-[#c7bb9d]">Thanks for your comment!</h3>
      </>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative w-full bg-gray-900 text-[#c7bb9d] mt-10 pb-24"
    >
      <div className="w-full lg:w-3/4">
        <input
          {...register("_id", { required: true })}
          type="hidden"
          value={_id}
        />
        <label className="block">Name</label>
        <input
          {...register("name", { required: true })}
          className="form-input mt-1 block w-full shadow-sm  border text-sm rounded-lg ring-primary-500 border-primary-500 b p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-primary-500 border-primary-500 shadow-sm-light mb-2"
          placeholder="John Doe"
        />

        {errors.name && <p>Name is required.</p>}
        <label className="block ">Email</label>
        <input
          type="email"
          {...register("email", { required: false })}
          className="form-input mt-1 block w-full shadow-sm  border text-sm rounded-lg ring-primary-500 border-primary-500 b p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-primary-500 border-primary-500 shadow-sm-light mb-2"
          placeholder="your@email.com"
        />

        <label className="block">Comment</label>

        <textarea
          {...register("comment", { required: true })}
          className="form-input mt-1 block w-full shadow-sm  border text-sm rounded-lg ring-primary-500 border-primary-500 b p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ring-primary-500 border-primary-500 shadow-sm-light mb-6"
          rows="8"
          placeholder="Enter some long form content."
        ></textarea>

        {errors.comment && <p>Comment is required.</p>}
        <input
          type="submit"
          className="shadow bg-sky-700 hover:bg-sky-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        />
      </div>
      <SocialMedia />
      <Copyright />
    </form>
  );
}
