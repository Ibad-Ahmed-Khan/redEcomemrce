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

const SmartBrand = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      alignItems="center"
      justifyContent="center"
      gap="1rem"
      p="4"
    >
      <Flex alignItems="center" justifyContent="center">
        <Img src={Watch} />
      </Flex>
      <VStack align="start" spacing="4" p="4">
        <Text>Exusivley available on RedStore</Text>
        <Heading>Smart Band 4</Heading>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          assumenda enim a, ad sit sint, neque pariatur id sequi necessitatibus
          vitae alias quae nihil amet eius corrupti, tempora esse aliquam.
        </Text>
        <Box>
          <Button
            colorScheme="red"
            _hover={{
              backgroundColor: "teal.500",
              transform: "scale(1.05)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            Buy Now
          </Button>
        </Box>
      </VStack>
    </SimpleGrid>
  );
};

export default SmartBrand;
