import { Box } from "@chakra-ui/react";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Account from "./pages/Account";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import { useStore } from "./zustand/Store";
import { useEffect, useState } from "react";
import Cart from "./pages/Cart";
import Loader from "./components/Loader"; // Import your Loader component

function App() {
  const { uniqueProduct, productList, data } = useStore();
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [loader, setLoader] = useState(true); // Loader state

  useEffect(() => {
    // Save productList to localStorage whenever it changes
    if (productList.length) {
      localStorage.setItem("1", JSON.stringify(productList));
    }
  }, [productList]);

  useEffect(() => {
    // Save data to localStorage whenever it changes
    if (data.length) {
      localStorage.setItem("2", JSON.stringify(data));
    }
  }, [data]);

  // Related products logic
  useEffect(() => {
    const uniqueProductData = JSON.parse(localStorage.getItem("uniqueProduct"));

    if (productList.length && uniqueProductData) {
      const productIndex = uniqueProductData.id - 1; // Adjust for zero-based index
      const related = [];
      for (let i = 1; i <= 4; i++) {
        const nextIndex = (productIndex + i) % productList.length; // Wrap around using modulo
        related.push(productList[nextIndex]);
      }
      setRelatedProduct(related);
      localStorage.setItem("relatedProduct", JSON.stringify(related));
    } else if (productList.length) {
      const firstFourProducts = productList.slice(0, 4); // Fallback to the first 4 products
      setRelatedProduct(firstFourProducts);
      localStorage.setItem("relatedProduct", JSON.stringify(firstFourProducts));
    }

    // Set loader to false after processing related products
    // setLoader(false);
  }, [productList]);

  // Timer for loader duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      w={{ base: "100vw", md: "100vw", lg: "99vw" }}
      fontFamily="Manrope, sans-serif"
      fontWeight="bold"
      fontStyle="normal"
    >
      {loader ? (
        <Loader /> // Render the loader
      ) : (
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
      )}
    </Box>
  );
}

export default App;
