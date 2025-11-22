import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import AllProducts from "./pages/AllProducts";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import Cart from "./pages/Cart";
import Product from "./components/Product";
import AdminPanel from "./pages/AdminPanel";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer, toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const auth = localStorage.getItem("token");
  if (!auth) {
    toast.error("Please login to access this page.");
  }
  return auth ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/product/:productId" element={<Product />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
