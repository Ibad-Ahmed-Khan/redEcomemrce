import { Box, Flex, Img, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Google from "../assets/RedStore_Img/images/play-store.png";
import App from "../assets/RedStore_Img/images/app-store.png";

import BlackLogo from "../assets/RedStore_Img/images/logo-white.png";

import { Link as RouterLink } from "react-router-dom";
const Footer = () => {
  const links = [
    { link: "Home", to: "/" },
    { link: "Product", to: "/product" },
    { link: "About", to: "/about" },
    { link: "Contact", to: "/contact" },
    { link: "Account", to: "/account" },
  ];

  return (
    <VStack pt="4rem" pb="2rem" color="#fff" bg="#000">
      <Flex
        flexDir={{ base: "column", md: "column", lg: " row", xl: " row" }}
        w="full"
        align="center"
        justify={{
          base: "center",
          md: "center",
          lg: " space-evenly",
          xl: " space-evenly",
        }}
      >
        <VStack minH="13rem" maxW="20rem" align="self-start">
          <Text fontWeight="bold">Download our App</Text>
          <Text color="gray">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Text>
          <Flex align="center" justify="center" gap="1rem">
            <Img w="8rem" src={Google} />
            <Img w="8rem" src={App} />
          </Flex>
        </VStack>
        <VStack textAlign="center" minH="13rem" maxW="20rem">
          <Img w="8rem" src={BlackLogo} />
          <Text color="gray" pt="2rem">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem,
            voluptatum.
          </Text>
        </VStack>
        <VStack textAlign="center" minH="13rem" maxW="20rem">
          <Text fontWeight="bold">Useful Links</Text>
          {links.map((item, index) => {
            return (
              <Flex color="gray" key={index}>
                <RouterLink to={item.to}>{item.link}</RouterLink>
              </Flex>
            );
          })}
        </VStack>
        <VStack textAlign="center" minH="13rem" maxW="20rem">
          <Text fontWeight="bold">Follow Us</Text>
          <Link color="gray"> Facebook </Link>
          <Link color="gray"> Twitter </Link>
          <Link color="gray"> Instagram </Link>
          <Link color="gray"> LinkedIn </Link>
        </VStack>
      </Flex>
      <Box border="3px solid gray" w="80%" />
      <Text color="gray" textAlign="center">
        Copyright 2024 - Ibad Ahmed Khan
      </Text>
    </VStack>
  );
};

export default Footer;
