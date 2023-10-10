import "./App.css";
import "./Index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Post from "./Components/Post";
import Project from "./Components/Project";
import SinglePost from "./Components/SinglePost";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/post/:slug" element={<SinglePost />} />
        <Route path="/post" element={<Post />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
