import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
