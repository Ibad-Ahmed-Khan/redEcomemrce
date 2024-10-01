import { Box } from "@chakra-ui/react";
import "./logo.css";

const Logo = () => {
  return (
    <Box className="parent" cursor="pointer">
      <Box className="eye1"></Box>
      <Box className="eye2"></Box>
    </Box>
  );
};

export default Logo;
