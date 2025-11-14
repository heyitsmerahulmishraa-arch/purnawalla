import {Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Topbar from "./components/Topbar"
import Footer from "./components/Footer"
import AllProducts from "./components/AllProducts"
import Contact from "./components/Contact"
function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
