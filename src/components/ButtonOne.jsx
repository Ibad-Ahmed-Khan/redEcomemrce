import { Box, Button } from "@chakra-ui/react";
import { HiArrowNarrowRight } from "react-icons/hi";

const ButtonOne = ({ buttonText }) => {
  return (
    // <RouterLink to="/product">
    <Button
      color="#fff"
      bg="#e65833"
      borderRadius="7rem"
      _hover={{ bg: "#e65833" }}
      _active={{ color: "#e65833", bg: "#fff" }}
      textTransform="Capitalize"
    >
      {buttonText}
      <Box ml="1rem" as={HiArrowNarrowRight} />
    </Button>
    // </RouterLink>
  );
};

export default ButtonOne;
