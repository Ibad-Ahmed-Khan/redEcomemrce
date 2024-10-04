import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { Link as RouterLink } from "react-router-dom";
import { useStore } from "../zustand/Store";

const RelatedProduct = () => {
  const { setUniqueProduct } = useStore(); // Zustand store

  // Fetch all products from localStorage or return an empty array if none are found
  const allProducts = JSON.parse(localStorage.getItem("1")) || [];
  const uniqueProduct =
    JSON.parse(localStorage.getItem("uniqueProduct")) || null;

  let relatedProduct = [];

  // If `uniqueProduct` exists, get related products, otherwise get the first 4 products
  if (allProducts.length && uniqueProduct) {
    const productIndex = uniqueProduct.id - 1; // Adjust for zero-based index
    for (let i = 1; i <= 4; i++) {
      const nextIndex = (productIndex + i) % allProducts.length; // Wrap around using modulo
      relatedProduct.push(allProducts[nextIndex]);
    }
    localStorage.setItem("relatedProduct", JSON.stringify(relatedProduct));
  } else if (allProducts.length) {
    // If `uniqueProduct` doesn't exist, show the first 4 products from `allProducts`
    relatedProduct = allProducts.slice(0, 4);
  }

  useEffect(() => {
    localStorage.setItem("relatedProduct", JSON.stringify(relatedProduct));
  }, [relatedProduct]); // Run only when relatedProduct changes

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Flex
      flexDir="column"
      align="center"
      justifyContent="center"
      paddingBlock="2rem"
    >
      <Flex flexWrap="wrap" align="center" justify="center" gap="2rem">
        {relatedProduct.map((product) => (
          <RouterLink key={product.id} to="/detail">
            <Flex
              transform="translateY(0)"
              transition="all .3s ease-in-out"
              _hover={{
                cursor: "pointer",
                transform: "translateY(-1rem)",
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

export default RelatedProduct;
