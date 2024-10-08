import { Box, Button, Flex, Text, keyframes } from "@chakra-ui/react";
import { HiArrowNarrowRight } from "react-icons/hi";

// Define keyframes for the arrow hover animation
const buttonOpacity = keyframes`
  0% { opacity:   1;}
  25% { opacity:  0.7; }
  50% { opacity:  0.4; }
  75% { opacity:  0.2; }
  100% { opacity: 0;}
`;

const buttonOpacity2 = keyframes`
  0% { opacity:   0;}
  25% { opacity:  0.2; }
  50% { opacity:  0.4; }
  75% { opacity:  0.7; }
  100% { opacity: 1;}
`;

const scaleRight = keyframes`
  0% { transform: translateX(0px); }
  25% { transform: translateX(10px); }
  50% { transform: translateX(20px); }
  75% { transform: translateX(10px); }
  100% { transform: translateX(0px); }
`;

const ButtonOne = ({ buttonText }) => {
  return (
    <Button
      align="center"
      color="#fff"
      bg="#e65833"
      borderRadius="7rem"
      fontWeight="bold"
      p={{ base: "1rem 0.5rem", lg: "1rem 1rem" }}
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.2)"
      transition="transform 0.3s, box-shadow 0.3s, background 0.3s"
      cursor="pointer" // Change cursor to pointer
      fontSize={{ base: "xm", md: "md" }}
      _hover={{
        transform: "scale(1)",
        boxShadow: "0 8px 30px rgba(230, 88, 51, 0.5)", // Change shadow color to #e65833
        // bg: "#fff", // Slightly darker on hover
        border: "1px solid #d45a2c",
        color: "#d45a2c",
        bgGradient: "radial(white, pink.100)",
        "& .arrow": {
          animation: `${buttonOpacity} 0.4s ease-in-out forwards, ${scaleRight} 0.4s ease-in-out forwards`,
        },
        "& .arrow2": {
          animation: `${buttonOpacity2} 0.4s ease-in-out forwards, ${scaleRight} 0.4s ease-in-out forwards`,
        },
      }}
      _active={{
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        transform: "scale(0.98)", // Scale down on active
      }}
      textTransform="capitalize"
    >
      <Box
        pos="relative"
        opacity="0"
        className="arrow2"
        mr="0.2rem"
        as={HiArrowNarrowRight}
        transition="transform 0.2s"
      />
      <Text>{buttonText}</Text>
      <Box
        pos="relative"
        className="arrow"
        ml=".2rem"
        as={HiArrowNarrowRight}
        transition="transform 0.2s"
      />
    </Button>
  );
};

export default ButtonOne;
