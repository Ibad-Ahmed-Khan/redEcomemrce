import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Img,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useStore } from "../zustand/Store";

import ProductCount from "../components/ProductCount";
import { useEffect, useState } from "react";
const Cart = () => {
  const { productCounts, handleCountIncrement, handleCountDecrement } =
    useStore();
  const cartArray = JSON.parse(localStorage.getItem("cartArrayData")) || [];

  // useEffect(() => {
  //   cartArray.forEach((item) => {
  //     const currentCount = productCounts[item.id] || 1;
  //     if (currentCount >= item.productAvailable) {
  //       alert(`${item.productName} stock will be available soon.`);
  //     }
  //   });
  // }, [productCounts]);

  return (
    <Flex
      flexDir="column"
      align="center"
      justify="center"
      minW="100vw"
      minH="100vh"
      bg="#fff"
      p={8}
    >
      {cartArray.length === 0 ? (
        <Text fontSize="xl">Your cart is empty.</Text>
      ) : (
        <TableContainer w="80%" overflow="hidden">
          <Table variant="simple">
            <Thead color="#fff" bg="#e65833">
              <Tr>
                <Th color="#fff">Product</Th>
                <Th color="#fff">Quantity</Th>
                <Th color="#fff">Subtotal</Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartArray.map((item, index) => (
                <Tr key={index}>
                  <Td>
                    <Flex align="center">
                      <Img
                        w="4rem"
                        h="6rem"
                        src={item.productImg}
                        alt={item.productName}
                      />
                      <Flex flexDir="column">
                        <Text ml={4}>{item.productName}</Text>
                        <Text ml={4}> Price ${item.productPrice}</Text>
                        <Button
                          w="6rem"
                          bg="#fff"
                          fontWeight="100"
                          color="#e65833"
                          _hover={{
                            bg: "#fff",
                            border: "1px solid",
                          }}
                          _active={{ border: "none" }}
                          _focus={{ border: "none" }}
                        >
                          Remove
                        </Button>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex key={index} align="center">
                      <Button
                        onClick={() => handleCountDecrement(item.id)}
                        isDisabled={productCounts[item.id] <= 1}
                      >
                        -
                      </Button>
                      <Text mx={2}>{productCounts[item.id] || 1}</Text>
                      <Button
                        onClick={() => {
                          handleCountIncrement(item.id);
                        }}
                        isDisabled={
                          productCounts[item.id] == item.productAvailable
                        }
                      >
                        +
                      </Button>
                    </Flex>
                  </Td>
                  <Td>
                    $
                    {item.productPrice *
                      (productCounts[item.id] || 1).toFixed(2)}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Flex>
  );
};

export default Cart;
