import React from "react";
import "./IndividualPost.css";
import user from "../image/user.jpg";

export default function IndividualPost({ post }) {
  return (
    <div className="post">
      <div>
        <img src={user} alt="user img" />
        <div>
          <p>User</p>
          <p>{`${post.date.getDate()} ${post.date.toLocaleString("en-us", {
            month: "long",
          })} at ${post.date.getHours()}:${post.date.getMinutes()}`}</p>
        </div>
      </div>
      {post.text && (
        <div className="text">
          <p>{post.text}</p>
        </div>
      )}
      {post.url && (
        <div className="image">
          <img src={post.url} alt="post" />
        </div>
      )}
      <div className="buttons">
        <button>Like</button>
        <button>Comment</button>
        <button>Share</button>
      </div>
    </div>
  );
}
