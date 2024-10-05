import {
  Link,
  Box,
  Button,
  Flex,
  FormControl,
  Img,
  Input,
  VStack,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import img1 from "../assets/RedStore_Img/images/image1.png";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [password1, setPassword1] = useState(true);
  const [password2, setPassword2] = useState(true);
  const [password3, setPassword3] = useState(true);

  const handlePassword1 = () => {
    setPassword1(!password1);
  };

  const handlePassword2 = () => {
    setPassword2(!password2);
  };

  const handlePassword3 = () => {
    setPassword3(!password3);
  };

  return (
    <Flex
      flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}
      align="center"
      justify="space-around"
      minH="100vh"
      paddingInline={{ base: "1.5rem", md: "2rem", lg: "4rem" }}
      paddingBlock="2rem"
      bgGradient="radial(white, pink.100)"
    >
      <Flex align="center" justify="center">
        <Img
          w={{ base: "20rem", md: "20rem", lg: "42rem", xl: "42rem" }}
          src={img1}
        />
      </Flex>

      <Flex align="center" justify="center">
        <FormControl
          overflow="hidden"
          bg="#fff"
          w={{ base: "20rem", md: "20rem", lg: "22rem", xl: "22rem" }}
          h={{ base: "24rem", md: "24rem", lg: "30rem", xl: "30rem" }}
          p="2rem"
          borderRadius="xl"
          boxShadow="0 4px 20px rgba(0, 0, 0, 0.2)"
        >
          <Flex pos="relative" align="center" justify="space-evenly">
            <Text
              onClick={() => setIsLogin(true)}
              cursor="pointer"
              transition="all .6s ease-in-out"
              fontWeight={isLogin ? "bold" : "normal"}
              color={!isLogin ? "" : "#e65833"}
            >
              Login
            </Text>
            <Box
              pos="absolute"
              bottom="-0.5rem"
              transition="all .6s ease-in-out"
              w="6rem"
              transform={!isLogin ? "translateX(50px)" : "translateX(-58px)"}
              borderRadius="5rem"
              border="3px solid #e65833 "
            />
            <Text
              onClick={() => setIsLogin(false)}
              cursor="pointer"
              transition="all .6s ease-in-out"
              fontWeight={!isLogin ? "bold" : "normal"}
              color={!isLogin ? "#e65833" : ""}
            >
              Register
            </Text>
          </Flex>

          {/* Login Form */}
          <VStack
            p="2rem"
            pos="absolute"
            left="0"
            align="center"
            justify="center"
            minH="full"
            w="full"
            spacing="4"
            transition="all .6s ease-in-out"
            transform={isLogin ? "translateX(0)" : "translateX(-350px)"}
          >
            <Input placeholder="username" />
            <InputGroup alignItems="center" justifyContent="center">
              <Input
                type={password1 ? "" : "password"}
                placeholder="password"
              />
              <InputRightElement
                onClick={handlePassword1}
                cursor="pointer"
                h="100%" // Use full height to match the input
                width="4.5rem" // Adjust width as needed
                display="flex" // Use flexbox for centering
                alignItems="center" // Center the icon vertically
                justifyContent="center" // Center the icon horizontally
              >
                {password1 ? <ViewOffIcon /> : <ViewIcon />}
              </InputRightElement>
            </InputGroup>
            <Flex w="full" flexDir="column">
              <Button
                color="#fff"
                borderRadius="50px"
                bg="#e65833"
                _hover={{
                  bg: "#d94a2f", // Slightly darker shade on hover
                  transform: "translateY(-2px)", // Slight lift on hover
                }}
                _active={{
                  bg: "#c44329", // Even darker shade when active
                  transform: "translateY(1px)", // Slight press down effect
                }}
                transition="all 0.2s ease"
                p="1rem 2.5rem"
              >
                Login
              </Button>
            </Flex>
            <Link textAlign="center">Forgot password</Link>
          </VStack>

          {/* Register Form */}
          <VStack
            p="2rem"
            pos="absolute"
            left="0"
            align="center"
            justify="center"
            minH="full"
            w="full"
            spacing="4"
            transition="all .6s ease-in-out"
            transform={!isLogin ? "translateX(0)" : "translateX(350px)"}
          >
            <Input placeholder="email" />
            <InputGroup alignItems="center" justifyContent="center">
              <Input
                type={password2 ? "" : "password"}
                placeholder="password"
              />
              <InputRightElement
                onClick={handlePassword2}
                cursor="pointer"
                h="100%" // Use full height to match the input
                width="4.5rem" // Adjust width as needed
                display="flex" // Use flexbox for centering
                alignItems="center" // Center the icon vertically
                justifyContent="center" // Center the icon horizontally
              >
                {password2 ? <ViewOffIcon /> : <ViewIcon />}
              </InputRightElement>
            </InputGroup>
            <InputGroup alignItems="center" justifyContent="center">
              <Input
                type={password3 ? "" : "password"}
                placeholder="confirm password"
              />
              <InputRightElement
                onClick={handlePassword3}
                cursor="pointer"
                h="100%"
                width="4.5rem"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {password3 ? <ViewOffIcon /> : <ViewIcon />}
              </InputRightElement>
            </InputGroup>
            <Flex w="full" flexDir="column">
              <Button
                color="#fff"
                borderRadius="50px"
                bg="#e65833"
                _hover={{
                  bg: "#d94a2f", // Slightly darker shade on hover
                  transform: "translateY(-2px)", // Slight lift on hover
                }}
                _active={{
                  bg: "#c44329", // Even darker shade when active
                  transform: "translateY(1px)", // Slight press down effect
                }}
                transition="all 0.2s ease"
                p="1rem 2.5rem"
              >
                Register
              </Button>
            </Flex>
          </VStack>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Account;
