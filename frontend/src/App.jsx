import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom"
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar";
import "./index.css"
import { Cart } from "./pages/Cart";
import { CartProvider } from "./context/CreateContext";
import ProtectedRoutes from "../protectedRoutes/ProtectedRoutes";


function App() {
  return (
    <>

      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/dashboard"
              element=
              {<ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </>
  )
}

export default App