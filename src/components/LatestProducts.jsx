import { Box, Button, Flex, Heading, Img, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FaArrowRight } from "react-icons/fa";
import DropDown from "../components/DropDown";
import { useStore } from "../zustand/Store";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";

const lastestProducts = () => {
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
    } else if (sortOption === "default") {
      return 0;
    } else {
      return 0;
    }
  });

  useEffect(() => {
    if (sortedProducts.length > 0) {
      localStorage.setItem("1", JSON.stringify(sortedProducts));
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Flex
      w="full"
      bg="#fff"
      flexDirection="column"
      align="center"
      justify="center"
      p="4"
      paddingBlock="2rem"
    >
      <Flex gap="2rem" align="center" justify="center" flexWrap="wrap" w="80%">
        {sortedProducts.map((product, index) => (
          <RouterLink key={product.id} to="/detail">
            <Flex
              transform="translateY(0)"
              transition="all .3s ease-in-out"
              _hover={{
                cursor: "pointer",
                transform: "translateY(-1rem) ",
              }}
              onClick={() => {
                setUniqueProduct(product);
                scrollToTop();
              }}
              flexDir="column"
              color="gray.500"
            >
              <Img
                objectFit="cover"
                minW="12rem"
                maxW="12rem"
                minH="16rem"
                maxH="16rem"
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
      </Flex>
    </Flex>
  );
};

export default lastestProducts;
