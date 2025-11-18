import {Routes,Route, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Topbar from "./components/Topbar"
import Footer from "./components/Footer"
import AllProducts from "./pages/AllProducts"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import Register from "./components/Register"
import Login from "./components/Login"
import Cart from "./components/Cart"
import Product from "./components/Product"


const PrivateRoute = ({children}) => {
  const auth = true; // Replace with real authentication logic
  return auth ? children : <Navigate to="/login" />;
}


function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/product/:productId" element={<Product/>} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App
