import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Watch from "../assets/RedStore_Img/images/watch.png";
import ButtonOne from "./ButtonOne";
import { useStore } from "../zustand/Store";

const SmartBrand = () => {
  const { buttonText } = useStore();

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      alignItems="center"
      justifyContent="center"
      gap="1rem"
      p="4"
      minH="80vh"
      paddingBlock="2rem"
    >
      <Flex alignItems="center" justifyContent="center">
        <Img maxW={{ base: "full", md: "full", lg: "22rem" }} src={Watch} />
      </Flex>
      <VStack align="start" spacing="4" p="4">
        <Text>Exusivley available on RedStore</Text>
        <Heading
          fontWeight="bolder"
          fontSize={{ base: "2rem", md: "2rem", lg: "3rem" }}
        >
          Smart Band 4
        </Heading>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          assumenda enim a, ad sit sint, neque pariatur id sequi necessitatibus
          vitae alias quae nihil amet eius corrupti, tempora esse aliquam.
        </Text>
        <Box>
          <ButtonOne buttonText="Buy Now" />
        </Box>
      </VStack>
    </SimpleGrid>
  );
};

export default SmartBrand;
