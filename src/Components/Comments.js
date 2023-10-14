import "./CommentStyles.css";

function Comment() {
  let comment = "";

  return (
    <>
      <div className="container">
        <div className="title">
          <h1>Comments</h1>
        </div>
        <div className="addComment">
          <textarea placeholder="Add Comments" />
          <button>Post</button>
        </div>
        <div className="comments"></div>
      </div>
    </>
  );
}

export default Comment;
