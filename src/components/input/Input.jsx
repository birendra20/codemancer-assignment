import React from "react";
import user from "../image/user.jpg";
import "./Input.css";

const Input = () => {
  return (
    <div className="input">
      <div>
        <img src={user} alt="user" />
        <textarea placeholder="post something..."></textarea>
      </div>
      <div className="line"></div>
      <div className="btn">
        <button>GIF</button>
        <button>Post</button>
      </div>
    </div>
  );
};

export default Input;
