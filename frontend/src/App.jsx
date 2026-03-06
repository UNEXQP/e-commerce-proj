import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
import "./index.css"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/nav" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App