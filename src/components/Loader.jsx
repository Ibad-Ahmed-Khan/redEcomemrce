import { Flex, Box, Text, keyframes } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

// Keyframes for cart sway animation
const swayAnimation = keyframes`
  0% { transform: translateX(-100px);}
  50% { transform: translateX(100px);}
  100% { transform: translateX(-100px);}
`;

// Keyframes for opacity change
const changeOpacity = keyframes`
  0% { opacity: 0; }
  50% { opacity: 0.9; }
  100% { opacity: 0; }
`;

const Loader = () => {
  return (
    <Flex
      align="center"
      justify="center"
      minH="100vh"
      bgGradient="linear(to-r, #2980B9, #6DD5ED)" // Gradient background for added depth
      flexDirection="column"
    >
      {/* Shopping Cart Icon */}
      <Box
        animation={`${swayAnimation} 4s ease-in-out infinite, ${changeOpacity} 4s ease-in-out infinite`} // Correctly combine animations
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <FaShoppingCart size={50} color="#fff" /> {/* Shopping cart icon */}
      </Box>

      <Text
        animation={`${changeOpacity} 4s ease-in-out infinite`} // Correctly combine animations
        fontSize="2xl"
        color="white"
        fontWeight="bold"
        mt="20px"
      >
        Ibad Ahmed Khan
      </Text>
    </Flex>
  );
};

export default Loader;
