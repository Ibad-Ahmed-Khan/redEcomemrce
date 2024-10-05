import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useStore } from "../zustand/Store";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import DropDown from "../components/DropDown";
import RelatedProduct from "../components/RelatedProduct";
import ProductCount from "../components/ProductCount";

import { Link as RouterLink } from "react-router-dom";
import ButtonOne from "../components/ButtonOne";
import DropDownTwo from "../components/DropDownTwo";

const Detail = () => {
  const { detailFirsImg, setDetailFirsImg, setUniqueProduct, handleCartArray } =
    useStore();

  // Load unique product from localStorage
  const uniqueProduct = JSON.parse(localStorage.getItem("uniqueProduct"));

  // If uniqueProduct exists, ensure that detailFirsImg is set when the page reloads
  useEffect(() => {
    if (uniqueProduct && !detailFirsImg) {
      setDetailFirsImg(uniqueProduct.productImg); // Set the first image from uniqueProduct
    }
  }, [uniqueProduct, detailFirsImg, setDetailFirsImg]);

  // Use default values to prevent rendering issues
  const product = uniqueProduct || {
    productShortName: "Unknown",
    productName: "Product Not Found",
    productPrice: "N/A",
    productDetail: "",
    detailImg1: "",
    detailImg2: "",
    detailImg3: "",
    detailImg4: "",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <SimpleGrid
      bg="#fff"
      alignItems="center"
      justifyContent="center"
      columns={{ base: "1", md: "1", lg: "2", xl: "2" }}
      minH="100vh"
      gap="2rem"
    >
      <Flex
        align="center"
        justify={{ base: "center", md: "center", lg: "end", xl: "end" }}
      >
        <Flex flexDir="column" align="center" justifyContent="center">
          <Box>
            <Img
              objectFit="cover"
              minW="22rem"
              maxW="22rem"
              minH="30rem"
              maxH="30rem"
              src={detailFirsImg}
            />
          </Box>
          <Flex
            mt="1rem"
            w="full"
            align="center"
            justifyContent="space-between"
          >
            <Img
              cursor="pointer"
              minW="5rem"
              maxW="5rem"
              minH="6rem"
              maxH="6rem"
              objectFit="cover"
              src={product.detailImg1}
              onClick={() => setDetailFirsImg(product?.detailImg1)}
            />
            <Img
              cursor="pointer"
              minW="5rem"
              maxW="5rem"
              minH="6rem"
              maxH="6rem"
              objectFit="cover"
              src={product.detailImg2}
              onClick={() => setDetailFirsImg(product?.detailImg2)}
            />
            <Img
              cursor="pointer"
              minW="5rem"
              maxW="5rem"
              minH="6rem"
              maxH="6rem"
              objectFit="cover"
              src={product.detailImg3}
              onClick={() => setDetailFirsImg(product?.detailImg3)}
            />
            <Img
              cursor="pointer"
              minW="5rem"
              maxW="5rem"
              minH="6rem"
              maxH="6rem"
              objectFit="cover"
              src={product.detailImg4}
              onClick={() => setDetailFirsImg(product?.detailImg4)}
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex
        textAlign={{ base: "center", md: "center", lg: "start", xl: "start" }}
        flexDir="column"
        align="center"
        justify="center"
      >
        <VStack
          maxW="30rem"
          spacing="2"
          paddingBlock="2rem"
          align={{ base: "center", md: "center", lg: "start", xl: "start" }}
          justify={{ base: "center", md: "center", lg: "start", xl: "start" }}
        >
          <Text>{product.productShortName}</Text>
          <Heading>{product.productName}</Heading>
          <Text>${product.productPrice}</Text>
          <DropDownTwo />
          <Flex align="center" justify="center" gap="1rem" pt="3rem">
            <ProductCount />
            <RouterLink
              to="/cart"
              onClick={() => {
                handleCartArray();
                scrollToTop();
              }}
            >
              <ButtonOne buttonText="Add to Cart" />
            </RouterLink>
          </Flex>
          <Text
            fontSize="1rem"
            letterSpacing="-1px"
            textTransform="uppercase"
            fontWeight="bolder"
          >
            Product Details
          </Text>
          <Text>{product.productDetail}</Text>
        </VStack>
      </Flex>

      <Flex
        p="2rem"
        minW="100vw"
        flexDir="column"
        align="center"
        justifyContent="center"
      >
        <Flex w="full" align="center" justify="space-around">
          <Text fontWeight="bolder">Related Products</Text>
          <Text fontWeight="bolder">View More</Text>
        </Flex>
        <RelatedProduct />
      </Flex>
    </SimpleGrid>
  );
};

export default Detail;
