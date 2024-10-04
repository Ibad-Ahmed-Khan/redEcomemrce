import {
  Box,
  CloseButton,
  Flex,
  Image,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Cart from "../assets/RedStore_Img/images/cart.png";
import Logo from "../assets/RedStore_Img/images/logo.png";
import Hamburger from "../assets/RedStore_Img/images/menu.png";
import { useStore } from "../zustand/Store";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const links = [
    { link: "Home", to: "/" },
    { link: "Product", to: "/product" },
    { link: "About", to: "/about" },
    { link: "Contact", to: "/contact" },
    { link: "Account", to: "/account" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [click, setClick] = useState(false);

  const handleCLick = () => {
    setClick(!click);
    console.log(click);
  };

  const { hamburger, handleHamburger, cartArray } = useStore();
  return (
    <Box zIndex="99999" pos="sticky" top="0" bg="#fee4eb">
      <SimpleGrid alignItems="center" columns="2" p="4">
        <Flex>
          <RouterLink onClick={scrollToTop} to="/">
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
                <RouterLink onClick={scrollToTop} to={item.to}>
                  <Box
                    className="bar"
                    opacity="0"
                    w="0.6rem"
                    border="2px solid #e65833"
                  />
                  {item.link}
                </RouterLink>
              </Flex>
            );
          })}
          <RouterLink onClick={scrollToTop} to="/cart">
            <Box pos="relative">
              <Flex
                pos="absolute"
                top="-.7rem"
                right="-.7rem"
                // bg="#fff"
                boxShadow="0 4px 8px rgba(255, 105, 180, 0.5);"
                fontSize=".7rem"
                fontWeight="bold"
                w="1.2rem"
                h="1.2rem"
                borderRadius="50%"
                align="center"
                justify="center"
              >
                {cartArray.length}
              </Flex>
            </Box>
            <Img w="1.5rem" cursor="pointer" src={Cart} />
          </RouterLink>
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
      <Box
        pos="absolute"
        // top="0"
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(2px)"
        minW={hamburger ? "100%" : "0"}
        minH={hamburger ? "10000%" : "0"}
        transition="all .5s ease-in-out"
        transformOrigin="top"
        onClick={handleHamburger}
      />
      <Flex
        backdropFilter="blur(10px)"
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
              <RouterLink
                onClick={() => {
                  scrollToTop();
                  handleCLick();
                }}
                to={item.to}
              >
                {item.link}
              </RouterLink>
            </Flex>
          );
        })}
        <RouterLink onClick={scrollToTop} to="/cart">
          <Box pos="relative">
            <Flex
              pos="absolute"
              top="-.7rem"
              right="-.7rem"
              // bg="#fff"
              boxShadow="0 4px 8px rgba(255, 105, 180, 0.5);"
              fontSize=".7rem"
              fontWeight="bold"
              w="1.2rem"
              h="1.2rem"
              borderRadius="50%"
              align="center"
              justify="center"
            >
              {cartArray.length}
            </Flex>
          </Box>
          <Img w="1.5rem" cursor="pointer" src={Cart} />
        </RouterLink>
      </Flex>
    </Box>
  );
};

export default Header;
