const Comments = ({ comments = [] }) => {
  return (
    <>
      <h2 className="mt-10 mb-4 text-xl  leading-tight">Comments:</h2>
      <ul>
        {comments?.map(({ _id, _createdAt, name, email, comment }) => (
          <li key={_id} className="mb-5 bg-white">
            <hr className="mb-5" />
            <h4 className="mb-2 leading-tight">
              <a href={`mailto:${email}`}>{name}</a>
              <p>{new Date(_createdAt).toDateString()}</p>
            </h4>
            <p>{comment}</p>
            <hr className="mt-5 mb-5" />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Comments;
