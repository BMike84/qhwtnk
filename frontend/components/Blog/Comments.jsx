const Comments = ({ comments = [] }) => {
  return (
    <div className="w-lg lg:w-3/4 text-[#c7bb9d] ">
      <h2 className="mb-4 text-xl leading-tight uppercase text-[#c7bb9d] inline-block border-b border-[#c7bb9d]">
        Comments
      </h2>
      <ul>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li
            key={_id}
            className="mb-5  w-full shadow-sm border-2 border-[#c7bb9d] shadow-[#c7bb9d] p-6 "
          >
            <h4 className="mb-2 leading-tight">
              <div className="flex justify-between border-b border-[#c7bb9d] lg:text-lg font-semibold">
                <p className="pb-2">{name}</p>
                <p>{new Date(_createdAt).toDateString()}</p>
              </div>
            </h4>
            <p className="text-[#f6e8c7]">{comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
