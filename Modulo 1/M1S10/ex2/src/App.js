import "./App.css";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
}

export default App;
