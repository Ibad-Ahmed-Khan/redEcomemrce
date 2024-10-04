import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { FaCaretUp } from "react-icons/fa";
import { useStore } from "../zustand/Store";
import { useEffect, useState } from "react";

const DropDownTwo = () => {
  const {
    productList,
    hover2,
    handleHover2,
    uniqueProduct,
    sortOption2,
    setSortOption2,
  } = useStore();
  const [name, setName] = useState("default");
  // const productSizeArray = JSON.parse(localStorage.getItem("3"));

  //   console.log(uniqueProduct);
  const productArray = Object.values(uniqueProduct);
  //   console.log(productArray);

  console.log(uniqueProduct);

  return (
    <Box textTransform="capitalize">
      <Flex
        align="center"
        justify="Cenetr"
        border="1px solid gray"
        cursor="pointer"
        onClick={handleHover2}
      >
        <Input
          textTransform="capitalize"
          border="none"
          type="button"
          value={name}
          className="DropDown"
          cursor="pointer"
          transition="all .3s ease-in-out"
          onChange={(e) => setSortOption2(e.target.value)}
        />
        <Box
          transform={hover2 ? "rotate(180deg)" : "rotate(0deg)"}
          className="iconUp"
          transition="all .3s ease-in-out"
          as={FaCaretUp}
          mr="1rem"
        />
      </Flex>
      <Box
        bg="#fff"
        transition="all .3s ease-in-out"
        className="dataa"
        transform={hover2 ? "scale(1,1)" : "scale(1,0)"}
        transformOrigin="top"
        boxShadow="lg"
        pos="absolute"
        zIndex="10"
      >
        {productArray.map((item, index) => {
          return (
            <Flex flexDir="column" key={index}>
              <Text
                className="text"
                p="4px"
                paddingInline="1rem"
                transition="all .3s ease-in-out"
                zIndex="222"
                value={item}
                onChange={(e) => setSortOption2(e.target.value)}
                _hover={{ color: "#fff", bg: "gray", cursor: "pointer" }}
                whiteSpace="nowrap"
                onClick={() => {
                  setName(item);
                  setSortOption2(item);
                  handleHover2();
                }}
                minW="7.5rem"
              >
                {item}
              </Text>
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
};

export default DropDownTwo;
