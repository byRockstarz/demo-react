import React from "react";

const Post = ({ post }) => {
  return (
    <div className="d-flex mx-auto">
      <div className="bg-skyblue radian-10 mx-auto h-200px box-shadow mg-20px width-100 d-block">
        <div className="mg-1">
          <h3>
            {post.id}. {post.title}
          </h3>
          <small>{new Date().toLocaleTimeString("th")}</small>
          &nbsp;
          <small>{new Date().toLocaleDateString("th")}</small>
          <p className="flex-wrap">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
