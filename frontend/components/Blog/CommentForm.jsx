import { useState } from "react";
import { useForm } from "react-hook-form";

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
    return <h3>Submitting comment…</h3>;
  }
  if (hasSubmitted) {
    return (
      <>
        <h3>Thanks for your comment!</h3>
        <ul>
          <li>
            Name: {formData.name} <br />
            Email: {formData.email} <br />
            Comment: {formData.comment}
          </li>
        </ul>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
      <input
        {...register("_id", { required: true })}
        type="hidden"
        value={_id}
      />
      <label className="block mb-5">
        <span className="text-gray-700">Name</span>
        <input
          {...register("name", { required: true })}
          className="form-input mt-1 block w-full"
          placeholder="John Appleseed"
        />
      </label>
      {errors.name && <p>Name is required.</p>}
      <label className="block mb-5">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          {...register("email", { required: false })}
          className="form-input mt-1 block w-full"
          placeholder="your@email.com"
        />
      </label>

      <label className="block mb-5">
        <span className="text-gray-700">Comment</span>
        <textarea
          {...register("comment", { required: true })}
          className="form-textarea mt-1 block w-full"
          rows="8"
          placeholder="Enter some long form content."
        ></textarea>
      </label>
      {errors.comment && <p>Comment is required.</p>}
      <input
        type="submit"
        className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      />
    </form>
  );
}
