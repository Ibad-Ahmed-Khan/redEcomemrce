import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Img,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useStore } from "../zustand/Store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import DropDown from "../components/DropDown";
import RelatedProduct from "../components/RelatedProduct";

import ProductCount from "../components/ProductCount";

const Detail = () => {
  const {
    detailImg,
    setDetailImg,
    productList,
    uniqueProduct,
    setUniqueProduct,
    cartArray,
    handleCartArray,
  } = useStore();
  const { productId } = useParams(); // Get the product ID from the URL

  useEffect(() => {
    // Check if there's a product in localStorage
    const storedProduct = localStorage.getItem("selectedProduct");
    const storedDetailImg = localStorage.getItem("detailImg");

    if (storedProduct) {
      // If a product exists in localStorage, set it in Zustand store
      setUniqueProduct(JSON.parse(storedProduct));
    } else {
      // If no product in localStorage, find it in the productList
      const selectedProduct = productList.find((p) => p.id === productId);
      if (selectedProduct) {
        setUniqueProduct(selectedProduct);
        localStorage.setItem(
          "selectedProduct",
          JSON.stringify(selectedProduct)
        ); // Store in localStorage
      }
    }
    if (storedDetailImg) {
      setDetailImg(storedDetailImg);
    }
  }, []);

  // Log uniqueProduct to see its value after page reloads
  useEffect(() => {
    // console.log(uniqueProduct, detailImg);
  }, [uniqueProduct]);

  useEffect(() => {
    if (uniqueProduct && detailImg) {
      localStorage.setItem("detailImg", detailImg);
    }
  }, [uniqueProduct, detailImg]);

  return (
    <SimpleGrid
      paddingInline="1rem"
      bg="#fff"
      alignItems="center"
      justifyContent="center"
      columns={{ base: "1", md: "1", lg: "2", xl: "2" }}
      minH="100vh"
      gap="2rem"
      w="100vw"
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
              src={detailImg}
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
              src={uniqueProduct.detailImg1}
              onClick={(e) => {
                e.preventDefault();
                setDetailImg(uniqueProduct?.detailImg1);
              }}
            />
            <Img
              cursor="pointer"
              minW="5rem"
              maxW="5rem"
              minH="6rem"
              maxH="6rem"
              objectFit="cover"
              src={uniqueProduct.detailImg2}
              onClick={(e) => {
                e.preventDefault();
                setDetailImg(uniqueProduct.detailImg2);
              }}
            />
            <Img
              cursor="pointer"
              minW="5rem"
              maxW="5rem"
              minH="6rem"
              maxH="6rem"
              objectFit="cover"
              src={uniqueProduct.detailImg3}
              onClick={(e) => {
                e.preventDefault();
                setDetailImg(uniqueProduct?.detailImg3);
              }}
            />
            <Img
              cursor="pointer"
              minW="5rem"
              maxW="5rem"
              minH="6rem"
              maxH="6rem"
              objectFit="cover"
              src={uniqueProduct.detailImg4}
              onClick={(e) => {
                e.preventDefault();
                setDetailImg(uniqueProduct?.detailImg4);
              }}
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
          <Text>{uniqueProduct.productShortName} </Text>
          <Heading>{uniqueProduct.productName}</Heading>
          <Text>{uniqueProduct.productPrice}</Text>
          <DropDown />
          <Flex align="center" justify="center" gap="1rem" pt="3rem">
            <ProductCount />
            <Button
              w="10rem"
              color="#fff"
              bg="#e65833"
              _hover={{ bg: "#e65833" }}
              _active={{ bg: "#e63113", border: "none", outline: "none" }}
              borderRadius="4rem"
              onClick={() => handleCartArray()}
            >
              Add to Cart
            </Button>
          </Flex>
          <Text
            fontSize="1rem"
            letterSpacing="-1px"
            textTransform="uppercase"
            fontWeight="bolder"
          >
            Products Deatils
          </Text>
          <Text>{uniqueProduct.productDetail}</Text>
        </VStack>
      </Flex>
      <RelatedProduct />
    </SimpleGrid>
  );
};

export default Detail;
