import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Topbar from "./components/Topbar"
import Footer from "./components/Footer"
import AllProducts from "./pages/AllProducts"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import Register from "./components/Register"
import Login from "./components/Login"
function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
