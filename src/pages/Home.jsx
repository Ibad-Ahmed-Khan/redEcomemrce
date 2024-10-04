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
import { Link as RouterLink } from "react-router-dom";

import img1 from "../assets/RedStore_Img/images/image1.png";
import Cards from "../components/Cards";
import SmartBrand from "../components/SmartBrand";
import { HiArrowNarrowRight } from "react-icons/hi";
import RelatedProduct from "../components/RelatedProduct";
import ButtonOne from "../components/ButtonOne";
import LatestProducts from "../components/LatestProducts";
import { useStore } from "../zustand/Store";

const Home = () => {
  return (
    <Box>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 2 }}
        bgGradient="radial(white, pink.100)"
        minH="100vh"
        paddingInline={{ base: "2rem", md: "2rem", lg: "4rem" }}
        alignItems="center"
        justifyContent="end"
      >
        <VStack
          align="start"
          gap="1rem"
          w={{ base: "full", md: "full", lg: "80%" }}
        >
          <Heading fontWeight="bolder" fontSize="3rem">
            Give your workout a new style!
          </Heading>
          <Text color="gray">
            Explore the latest trends and find your perfect look with our
            exclusive collection. Shop now and enjoy great deals.
          </Text>
          <RouterLink to="/product">
            <ButtonOne buttonText="Explore Now" />
          </RouterLink>
        </VStack>
        <Flex align="center" justify="center">
          <Img src={img1} />
        </Flex>
      </SimpleGrid>
      <Flex align="Center" justify="Center" bg="#fff">
        <VStack>
          {/* 1 */}
          <Flex w="80%" align="center" justify="center" minH="100vh">
            <Flex flexDir="column" align="center" justify="center">
              <Text fontSize="1.4rem" fontWeight="bold" textAlign="center">
                Featured Products
              </Text>
              <Box w="5rem" border="3px solid #e65833" borderRadius="10rem" />
              <RelatedProduct />
            </Flex>
          </Flex>
          {/* 2 */}
          <Flex w="80%" flexDir="column" align="center" justify="center">
            <Text fontSize="1.4rem" fontWeight="bold" textAlign="center">
              Latest Products
            </Text>
            <Box w="5rem" border="3px solid #e65833" borderRadius="10rem" />
            <LatestProducts />
          </Flex>
          {/* 3 */}
          <Flex
            align="center"
            justify="center"
            bgGradient="radial(white, pink.100)"
          >
            <SmartBrand />
          </Flex>
          {/* 4 */}
          <Cards />
        </VStack>
      </Flex>
    </Box>
  );
};

export default Home;
