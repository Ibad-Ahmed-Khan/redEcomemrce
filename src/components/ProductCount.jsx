import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useStore } from "../zustand/Store";
import { FaArrowDown, FaArrowUp, FaUps } from "react-icons/fa";

const productCount = () => {
  const { productCounts, handleCountIncrement, handleCountDecrement } =
    useStore();
  const cartArray = JSON.parse(localStorage.getItem("uniqueProduct")) || [];
  const entries = Object.entries(cartArray);
  const uniqueId = entries[0][1];
  const stock = entries[12][1];
  const name = entries[6][1];
  const price = entries[11][1];

  useEffect(() => {
    if (productCounts[uniqueId] === stock) {
      alert(`${name + " stock will be avalaible soon"}`);
    }
  }, [productCounts]);

  return (
    <Box>
      <Flex align="center">
        <Button
          onClick={() => handleCountDecrement(uniqueId)}
          isDisabled={productCounts[uniqueId] <= 1}
        >
          -
        </Button>
        <Text mx={2}>{productCounts[uniqueId] || 1}</Text>
        <Button
          onClick={() => {
            handleCountIncrement(uniqueId);
          }}
          isDisabled={productCounts[uniqueId] == stock}
        >
          +
        </Button>
      </Flex>
    </Box>
  );
};

export default productCount;
