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
} from "@chakra-ui/react";
import { useStore } from "../zustand/Store";

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
      w="full"
      minH="100vh"
      bg="#fff"
      // p={8}
    >
      {cartArray.length === 0 ? (
        <Text fontSize="xl">Your cart is empty.</Text>
      ) : (
        <TableContainer w={{ base: "100%", md: "80%" }} overflowX="auto">
          <Table variant="striped" size={{ base: "sm", md: "md", lg: "lg" }}>
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
                        src={item.productImg}
                        alt={item.productName}
                      />
                      <Flex flexDir="column" ml={{ base: 0, md: 4 }}>
                        <Text>{item.productName}</Text>
                        <Text>Price ${item.productPrice}</Text>
                        <Text
                          w="6rem"
                          fontWeight="100"
                          color="#e65833"
                          cursor="pointer"
                          _hover={{
                            textDecoration: "underline",
                          }}
                        >
                          Remove
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>
                    <Flex align="center">
                      <Button
                        onClick={() => handleCountDecrement(item.id)}
                        isDisabled={productCounts[item.id] <= 1}
                        size={{ base: "xs", md: "sm" }}
                      >
                        -
                      </Button>
                      <Text mx={2}>{productCounts[item.id] || 1}</Text>
                      <Button
                        onClick={() => handleCountIncrement(item.id)}
                        isDisabled={
                          productCounts[item.id] === item.productAvailable
                        }
                        size={{ base: "xs", md: "sm" }}
                      >
                        +
                      </Button>
                    </Flex>
                  </Td>
                  <Td>
                    $
                    {(
                      item.productPrice * (productCounts[item.id] || 1)
                    ).toFixed(2)}
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
