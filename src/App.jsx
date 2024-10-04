import { Box, Card } from "@chakra-ui/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Account from "./pages/Account";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Cards from "./components/Cards";
import SmartBrand from "./components/SmartBrand";
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
    <Box
      w={{ base: "100vw", md: "100vw", lg: "99vw" }}
      fontFamily="Manrope, sans-serif"
      fontOpticalSizing="auto"
      fontWeight="<weight>" // Replace <weight> with the desired font weight (e.g., 400, 700)
      fontStyle="normal"
    >
      <BrowserRouter>
        <Box>
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
          <Footer />
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
