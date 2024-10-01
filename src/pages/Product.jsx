import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FaArrowRight } from "react-icons/fa";
import DropDown from "../components/DropDown";
import { useStore } from "../zustand/Store";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Product = () => {
  const {
    setUniqueProduct,
    uniqueProduct,
    productList,
    sortOption,
    setSortOption,
  } = useStore(); // Use Zustand store

  const [value, setValue] = useState([]);

  // useEffect to retrieve data from localStorage
  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem("1"));
    if (storedValue && Array.isArray(storedValue)) {
      setValue(storedValue);
    }
  }, []);

  const sortedProducts = [...value].sort((a, b) => {
    if (sortOption === "price") {
      return a.productPrice - b.productPrice;
    } else if (sortOption === "rating") {
      return b.productStarRating - a.productStarRating;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    if (sortedProducts.length > 0) {
      localStorage.setItem("1", JSON.stringify(sortedProducts));
    }
  });

  return (
    <Flex
      w="full"
      bg="#fff"
      flexDirection="column"
      align="center"
      justify="center"
      p="4"
    >
      <Flex
        w="80%"
        align="center"
        justify="space-between"
        mb="4"
        pos="relative"
        h="2.6rem"
      >
        <Text fontWeight="bold">All Products</Text>
        <Flex pos="absolute" top="0" right="0">
          <DropDown />
        </Flex>
      </Flex>
      <Flex gap="3rem" align="center" justify="center" flexWrap="wrap" w="80%">
        {sortedProducts.map((product, index) => (
          <RouterLink key={product.id} to="/detail">
            <Flex
              onClick={() => setUniqueProduct(product)}
              flexDir="column"
              color="gray.500"
            >
              <Img
                objectFit="cover"
                minW="14rem"
                maxW="14rem"
                minH="20rem"
                maxH="20rem"
                src={product.productImg}
                alt={product.productName}
              />
              <Text mt="2">{product.productName}</Text>
              <Flex mt="1">
                {Array.from({ length: 5 }, (_, i) => (
                  <StarIcon
                    key={i}
                    color={
                      i < product.productStarRating ? "yellow.400" : "gray.300"
                    }
                    boxSize="1rem"
                  />
                ))}
              </Flex>
              <Text fontSize="lg" mt="2">
                ${product.productPrice}
              </Text>
            </Flex>
          </RouterLink>
        ))}
        <Flex w="full" align="center" justify="start" gap="1rem">
          <Button
            transition="all .1s ease-in-out"
            borderRadius="none"
            _hover={{ color: "#fff", bg: "#0009", border: "none" }}
            variant="ghost"
            border="1px solid"
            w="2.2rem"
            h="2.5rem"
          >
            1
          </Button>
          <Button
            transition="all .1s ease-in-out"
            borderRadius="none"
            _hover={{ color: "#fff", bg: "#0009", border: "none" }}
            variant="ghost"
            border="1px solid"
            w="2.2rem"
            h="2.5rem"
          >
            2
          </Button>
          <Button
            transition="all .1s ease-in-out"
            borderRadius="none"
            _hover={{ color: "#fff", bg: "#0009", border: "none" }}
            variant="ghost"
            border="1px solid"
            w="2.2rem"
            h="2.5rem"
          >
            3
          </Button>
          <Button
            transition="all .1s ease-in-out"
            borderRadius="none"
            _hover={{ color: "#fff", bg: "#0009", border: "none" }}
            variant="ghost"
            border="1px solid"
            w="2.2rem"
            h="2.5rem"
          >
            4
          </Button>
          <Button
            transition="all .1s ease-in-out"
            borderRadius="none"
            _hover={{ color: "#fff", bg: "#0009", border: "none" }}
            variant="ghost"
            border="1px solid"
          >
            <FaArrowRight fontSize=".8rem" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Product;
