import React from "react";
import user from "../image/user.jpg";
import "./Input.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Input = () => {
  const {
    textInput,
    setTextInput,
    setGifModalStatus,
    selectedGif,
    setSelectedGif,
    posts,
    setPosts,
  } = useContext(AppContext);

  const handlePostBtnClick = () => {
    setPosts([
      ...posts,
      {
        date: new Date(),
        text: textInput,
        url: selectedGif,
      },
    ]);
    setTextInput("");
    setSelectedGif(null);
  };

  return (
    <div className="input">
      <div>
        <img src={user} alt="user" />
        <textarea
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="post something..."
        ></textarea>
      </div>
      {selectedGif && <img src={selectedGif} alt="gif" />}
      <div className="line"></div>
      <div className="btn">
        <button onClick={() => setGifModalStatus(true)}>GIF</button>
        <button
          onClick={handlePostBtnClick}
          disabled={!textInput && !selectedGif}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Input;
