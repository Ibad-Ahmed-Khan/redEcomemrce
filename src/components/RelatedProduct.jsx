import { StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

import { Link as RouterLink } from "react-router-dom";
import { useStore } from "../zustand/Store";

const RelatedProduct = () => {
  const { setUniqueProduct, productList, sortOption, setSortOption } =
    useStore(); // Use Zustand store

  const allProducts = JSON.parse(localStorage.getItem("1"));
  const uniqueProduct = JSON.parse(localStorage.getItem("uniqueProduct"));

  if (allProducts.length && uniqueProduct) {
    const relatedProduct = allProducts
      .filter((item, index) => item.id !== uniqueProduct.id)
      .slice(uniqueProduct.id - 1, uniqueProduct.id + 3);
    localStorage.setItem("relatedProduct", JSON.stringify(relatedProduct));
  }

  const relatedProduct = JSON.parse(localStorage.getItem("relatedProduct"));

  return (
    <Flex
      flexDir="column"
      align="center"
      justifyContent="center"
      paddingBlock="2rem"
    >
      <Flex flexWrap="wrap" align="center" justify="center" gap="2rem">
        {relatedProduct.map((product, index) => (
          <RouterLink key={product.id} to="/detail">
            <Flex
              transform="translateY(0)"
              transition="all .3s ease-in-out"
              _hover={{
                cursor: "pointer",
                transform: "translateY(-1rem) ",
              }}
              onClick={() => setUniqueProduct(product)}
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
