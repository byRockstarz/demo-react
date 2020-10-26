import React from "react";

const Post = ({ post }) => {
  return (
    <div className="d-flex ">
      <div className="bg-white mx-auto bd-less-grey max-width-400">
        <div className="mg-1">
          <h5>{post.title}</h5>
          <small>{new Date().toLocaleTimeString("th")}</small>
          &nbsp;
          <small>{new Date().toLocaleDateString("th")}</small>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
