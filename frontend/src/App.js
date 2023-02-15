import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Feedback from "./components/Feedback";
import Intro from "./components/Intro";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/intro" element={<Intro />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/feedbacks" element={<Feedback />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
