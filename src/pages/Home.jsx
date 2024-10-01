import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Icon,
  SimpleGrid,
  VStack,
  Flex,
  Img,
} from "@chakra-ui/react";
import { AiOutlineShopping } from "react-icons/ai";

import img1 from "../assets/RedStore_Img/images/image1.png";

const Home = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      minH="100vh"
      paddingInline="4rem"
      alignItems="center"
      justifyContent="end"
    >
      <VStack align="start" gap="1rem">
        <Heading fontWeight="bolder"> Discover Your Style</Heading>
        <Text color="gray">
          Explore the latest trends and find your perfect look with our
          exclusive collection. Shop now and enjoy great deals.
        </Text>
        <Button
          size="lg"
          colorScheme="red"
          leftIcon={<Icon as={AiOutlineShopping} boxSize={6} />}
          px="8"
          _hover={{
            backgroundColor: "teal.500",
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Explore Now
        </Button>
      </VStack>
      <Flex align="center" justify="center">
        <Img src={img1} />
      </Flex>
    </SimpleGrid>
  );
};

export default Home;
