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
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import { useStore } from "../zustand/Store";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";
import ButtonOne from "../components/ButtonOne";

const Cart = () => {
  const {
    handleRemoveFromCart,
    productCounts,
    handleCountIncrement,
    setUniqueProduct,
    handleCountDecrement,
    // cartArray, // Use cartArray directly from Zustand store
  } = useStore();

  const cartArray = JSON.parse(localStorage.getItem("cartArrayData")) || [];

  // Effect to sync cartArray with localStorage
  useEffect(() => {
    localStorage.setItem("cartArrayData", JSON.stringify(cartArray));
  }, [cartArray]); // Runs whenever cartArray changes

  const products = JSON.parse(localStorage.getItem("1"));

  return (
    <Flex
      flexDir="column"
      align="center"
      justify={{ base: "start", md: "start", lg: "center" }}
      w="full"
      minH="100vh"
      bg="#fff"
      // paddingBlock="2rem"
    >
      {cartArray.length === 0 ? (
        <Text fontSize="xl">Your cart is empty.</Text>
      ) : (
        <TableContainer w={{ base: "100%", md: "80%" }} overflowX="auto">
          <Table variant="normal" size={{ base: "sm", md: "md", lg: "lg" }}>
            <Thead color="#fff" bg="#e65833">
              <Tr>
                <Th color="#fff">Product</Th>
                <Th color="#fff">Quantity</Th>
                <Th color="#fff" textAlign="end">
                  Subtotal
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {cartArray.map((item, index) => (
                <Tr key={index}>
                  <Td>
                    <Flex
                      flexDir={{
                        base: "column",
                        md: "row",
                      }}
                      align={{ base: "start", md: "center" }}
                    >
                      <Img
                        w="4rem"
                        h="6rem"
                        objectFit="cover"
                        cursor="pointer"
                        src={item.productImg}
                        alt={item.productName}
                      />
                      <Flex flexDir="column" ml={{ base: 0, md: 4 }}>
                        <Text
                          w="full" // Ensure the Text takes the full width
                          whiteSpace="normal" // Allow wrapping of text
                        >
                          {item.productName}
                        </Text>
                        <Text>Price ${item.productPrice}</Text>
                        <Text
                          w="6rem"
                          fontWeight="100"
                          color="#e65833"
                          cursor="pointer"
                          _hover={{
                            textDecoration: "underline",
                          }}
                          onClick={() => handleRemoveFromCart(item.id)} // Pass the item id to handleRemoveFromCart
                        >
                          Remove
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex align="center">
                      <Button
                        color="#e65833"
                        borderRadius="none"
                        onClick={() => handleCountDecrement(item.id)}
                        isDisabled={productCounts[item.id] <= 1}
                        size={{ base: "xs", md: "sm" }}
                        fontWeight="bolder"
                      >
                        -
                      </Button>
                      <Text mx={2}>{productCounts[item.id] || 1}</Text>
                      <Button
                        color="#e65833"
                        borderRadius="none"
                        onClick={() => handleCountIncrement(item.id)}
                        isDisabled={
                          productCounts[item.id] === item.productAvailable
                        }
                        size={{ base: "xs", md: "sm" }}
                        fontWeight="bolder"
                      >
                        +
                      </Button>
                    </Flex>
                  </Td>
                  <Td textAlign="end">
                    $
                    {(
                      item.productPrice * (productCounts[item.id] || 1)
                    ).toFixed(2)}
                  </Td>
                </Tr>
              ))}
              {/* Horizontal line under Quantity and Subtotal only */}
              <Table
                variant="normal"
                size={{ base: "sm", md: "md", lg: "lg" }}
              ></Table>
              <Tr>
                <Td></Td>
                <Td colSpan={2}>
                  <Box borderTop="3px solid #e65833" my={4}></Box>
                </Td>
              </Tr>

              {/* Subtotal Row */}
              <Tr>
                <Td></Td>
                <Td colSpan={2}>
                  <Flex justify="space-between">
                    <Text fontWeight="bold">Subtotal</Text>
                    <Text fontWeight="bold">
                      $
                      {cartArray
                        .reduce(
                          (total, item) =>
                            total +
                            item.productPrice * (productCounts[item.id] || 1),
                          0
                        )
                        .toFixed(2)}
                    </Text>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td colSpan={2}>
                  <Flex justify="space-between">
                    <Text fontWeight="bold">Tax</Text>
                    <Text fontWeight="bold">$10.00</Text>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td colSpan={2}>
                  <Flex justify="space-between">
                    <Text fontWeight="bold">Total</Text>
                    <Text fontWeight="bold">
                      $
                      {cartArray
                        .reduce(
                          (total, item) =>
                            total +
                            item.productPrice * (productCounts[item.id] || 1),
                          +10
                        )
                        .toFixed(2)}
                    </Text>
                  </Flex>
                </Td>
              </Tr>
              <Tr>
                <Td></Td>
                <Td colSpan={2} textAlign="end">
                  <ButtonOne buttonText="Proceed to checkout" />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Flex>
  );
};

export default Cart;
