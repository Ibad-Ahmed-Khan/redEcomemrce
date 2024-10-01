import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { FaCaretUp } from "react-icons/fa";
import { useStore } from "../zustand/Store";
import { useEffect, useState } from "react";

const DropDown = () => {
  const { productList, sortOption, setSortOption, hover, handleHover } =
    useStore();
  const [name, setName] = useState("Default");
  const data = JSON.parse(localStorage.getItem("2"));

  return (
    <Box textTransform="capitalize">
      <Flex
        align="center"
        justify="Cenetr"
        border="1px solid gray"
        cursor="pointer"
        onClick={handleHover}
      >
        <Input
          textTransform="capitalize"
          border="none"
          type="button"
          value={name}
          className="DropDown"
          cursor="pointer"
          transition="all .3s ease-in-out"
          onChange={(e) => setSortOption(e.target.value)}
        />
        <Box
          transform={hover ? "rotate(180deg)" : "rotate(0deg)"}
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
        transform={hover ? "scale(1,1)" : "scale(1,0)"}
        transformOrigin="top"
        boxShadow="lg"
        pos="absolute"
        zIndex="10"
      >
        {data.map((item, index) => {
          return (
            <Flex flexDir="column" key={index}>
              <Text
                className="text"
                p="4px"
                paddingInline="1rem"
                transition="all .3s ease-in-out"
                zIndex="222"
                value={item.value}
                onChange={(e) => setSortOption(e.target.value)}
                _hover={{ color: "#fff", bg: "gray", cursor: "pointer" }}
                onClick={() => {
                  setName(item.name);
                  setSortOption(item.value);
                  handleHover();
                }}
              >
                {item.name}
              </Text>
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
};

export default DropDown;
