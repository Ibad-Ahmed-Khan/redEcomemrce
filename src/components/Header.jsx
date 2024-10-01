import {
  Box,
  CloseButton,
  Flex,
  Image,
  Img,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Cart from "../assets/RedStore_Img/images/cart.png";
import Logo from "../assets/RedStore_Img/images/logo.png";
import Hamburger from "../assets/RedStore_Img/images/menu.png";
import { useStore } from "../zustand/Store";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const links = [
    { link: "Home", to: "/" },
    { link: "Product", to: "/product" },
    { link: "About", to: "/about" },
    { link: "Contact", to: "/contact" },
    { link: "Account", to: "/account" },
    { link: "Cart", to: "/cart" },
  ];

  const { hamburger, handleHamburger } = useStore();
  return (
    <Box zIndex="99999" pos="sticky" top="0" w="100vw" bg="#fee4eb">
      <SimpleGrid alignItems="center" columns="2" p="4">
        <Flex>
          <RouterLink to="/">
            <Img w="7rem" src={Logo} />
          </RouterLink>
        </Flex>
        <Flex
          display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
          align="center"
          justify="center"
          gap="2rem"
        >
          {links.map((item, index) => {
            return (
              <Flex key={index}>
                <RouterLink to={item.to}>{item.link}</RouterLink>
              </Flex>
            );
          })}
          <Img w="1.5rem" cursor="pointer" src={Cart} />
        </Flex>
        <Image
          cursor="pointer"
          onClick={handleHamburger}
          display={{ base: "flex", md: "flex", lg: " none", xl: " none" }}
          pos="absolute"
          top="1.4rem"
          right="1rem"
          w="1rem"
          src={Hamburger}
          transform={hamburger ? "scale(1,0)" : "scale(1,1)"}
          transformOrigin="top"
          transition="all .5s ease-in-out"
        />
        <Box
          cursor="pointer"
          as={AiOutlineClose}
          onClick={handleHamburger}
          transform={hamburger ? "scale(1,1)" : "scale(0,0)"}
          transformOrigin="center"
          transition="all .5s ease-in-out"
          pos="absolute"
          top="1.4rem"
          right="1rem"
          w="1rem"
        />
      </SimpleGrid>
      {/* mobile */}
      <Flex
        onClick={handleHamburger}
        zIndex="99999"
        pos="absolute"
        borderBottomLeftRadius="50%"
        boxShadow="xl"
        w="100vw"
        p="8"
        transform={
          hamburger
            ? "translate(0, 0) scale(1, 1)"
            : "translate(150px, -200px) scale(0, 0)"
        }
        bgGradient="radial(white, pink.100)"
        transition="all .5s ease-in-out"
        display={{ base: "flex", md: "flex", lg: "none", xl: "none" }}
        flexDirection="column"
        align="center"
        justify="center"
        gap="2rem"
      >
        {links.map((item, index) => {
          return (
            <Flex key={index}>
              <RouterLink to={item.to}>{item.link}</RouterLink>
            </Flex>
          );
        })}
        <Img w="1.5rem" cursor="pointer" src={Cart} />
      </Flex>
    </Box>
  );
};

export default Header;
