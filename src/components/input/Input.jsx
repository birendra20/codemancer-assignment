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
      <div>
        <button>GIF</button>
      </div>
    </div>
  );
};

export default Input;
