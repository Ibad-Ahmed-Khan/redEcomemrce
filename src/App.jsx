import { Box, Card } from "@chakra-ui/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Account from "./pages/Account";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import { useStore } from "./zustand/Store";
import { useEffect } from "react";
import Cart from "./pages/Cart";

function App() {
  const { productList, data } = useStore();

  useEffect(() => {
    localStorage.setItem("1", JSON.stringify(productList));
  }, [productList]);

  // useEffect(() => {
  // }, [data]);

  localStorage.setItem("2", JSON.stringify(data));
  // localStorage.setItem("test", JSON.stringify(data));

  return (
    <BrowserRouter>
      <Box bgGradient="radial(white, pink.100)">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
        {/* <Cards /> */}
        <Footer />
        {/* <SmartBrand /> */}
      </Box>
    </BrowserRouter>
  );
}

export default App;
