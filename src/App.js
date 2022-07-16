import "./App.css";
import GifModal from "./components/gif/Gif";
import Input from "./components/input/Input";
import Posts from "./components/posts/Posts";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { gifModalStatus } = useContext(AppContext);
  return (
    <div className="App">
      <Input />
      {gifModalStatus && <GifModal />}
      <Posts />
    </div>
  );
}

export default App;
