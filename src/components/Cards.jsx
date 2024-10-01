import { Box, Button, Flex, Img, Text, VStack } from "@chakra-ui/react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import userImage1 from "../assets/RedStore_Img/images/user-1.png";
import userImage2 from "../assets/RedStore_Img/images/user-2.png";
import userImage3 from "../assets/RedStore_Img/images/user-3.png";

import Logo1 from "../assets/RedStore_Img/images/logo1.png";
import Logo2 from "../assets/RedStore_Img/images/logo2.png";
import Logo3 from "../assets/RedStore_Img/images/logo3.png";
import Logo4 from "../assets/RedStore_Img/images/logo4.png";
import Logo5 from "../assets/RedStore_Img/images/logo5.png";

const Cards = () => {
  const cardsData = [
    {
      id: 1,
      img: userImage1,
      cardText:
        "I'm really impressed with the product quality—it feels durable and well-made. The shipping was quick, and the item arrived in perfect condition and I would definitely recommend it!",
      cardName: "Sean Parker",
    },
    {
      id: 2,
      img: userImage2,
      cardText:
        "I'm really impressed with the product quality—it feels durable and well-made. The shipping was quick, and the item arrived in perfect condition and I would definitely recommend it!",
      cardName: "Mike Smith",
    },
    {
      id: 3,
      img: userImage3,
      cardText:
        "I'm really impressed with the product quality—it feels durable and well-made. The shipping was quick, and the item arrived in perfect condition and I would definitely recommend it!",
      cardName: "Mabel Joe",
    },
  ];

  const OutlinedStar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="17"
      height="17"
    >
      <path
        d="M12 .587l3.668 7.568 8.332 1.197-6.038 5.658 1.428 8.321L12 18.897l-7.39 3.88 1.428-8.321-6.038-5.658 8.332-1.197L12 .587z"
        stroke="gold" // Outline color
        strokeWidth="2" // Outline thickness
      />
    </svg>
  );

  return (
    <VStack
      minH="100vh"
      align="center"
      justify="center"
      paddingInline={{ base: "1rem", md: "1rem", lg: " 3rem", xl: "3rem" }}
      bg="#fff"
    >
      <Flex
        flexDirection={{ base: "column", md: "column", lg: " row", xl: "row" }}
        gap="2rem"
      >
        {cardsData.map((item) => (
          <Flex key={item.id} alignItems="center">
            <VStack
              maxW="24rem"
              minH="20rem"
              padding={4}
              spacing="4"
              boxShadow="md"
              align="center"
              justify="center"
              borderRadius="md"
              textAlign="center"
              paddingInline={{
                base: "1rem",
                md: "1rem",
                lg: " 3rem",
                xl: "3rem",
              }}
              transform="translateY(0) rotate(0deg)"
              transition="all .3s ease-in-out"
              _hover={{
                cursor: "pointer",
                transform: "translateY(-1rem) rotate(5deg) ",
              }}
            >
              <FaQuoteLeft
                style={{ width: "24", height: "24", color: "gold" }}
              />
              <Text>{item.cardText}</Text>
              <Flex style={{ display: "flex", gap: "6px" }}>
                <FaStar style={{ color: "gold" }} />
                <FaStar style={{ color: "gold" }} />
                <FaStar style={{ color: "gold" }} />
                <FaStar style={{ color: "gold" }} />
                <OutlinedStar />
              </Flex>
              <Img
                style={{ width: "4rem", height: "4rem", borderRadius: "50%" }}
                src={item.img}
              />
              <Text fontWeight="bold">{item.cardName}</Text>
            </VStack>
          </Flex>
        ))}
      </Flex>
      <Flex
        align="center"
        justify="center"
        flexWrap="wrap"
        pt="4rem"
        gap="2rem"
      >
        <Img
          sx={{
            filter: "grayscale(100%)",
            transition: "filter 0.5s ease",
            _hover: {
              filter: "grayscale(0%)",
            },
          }}
          cursor="pointer"
          src={Logo2}
        />
        <Img
          sx={{
            filter: "grayscale(100%)",
            transition: "filter 0.5s ease",
            _hover: {
              filter: "grayscale(0%)",
            },
          }}
          cursor="pointer"
          src={Logo3}
        />
        <Img
          sx={{
            filter: "grayscale(100%)",
            transition: "filter 0.5s ease",
            _hover: {
              filter: "grayscale(0%)",
            },
          }}
          cursor="pointer"
          src={Logo1}
        />
        <Img
          sx={{
            filter: "grayscale(100%)",
            transition: "filter 0.5s ease",
            _hover: {
              filter: "grayscale(0%)",
            },
          }}
          cursor="pointer"
          src={Logo4}
        />
        <Img
          sx={{
            filter: "grayscale(100%)",
            transition: "filter 0.5s ease",
            _hover: {
              filter: "grayscale(0%)",
            },
          }}
          cursor="pointer"
          src={Logo5}
        />
      </Flex>
    </VStack>
  );
};

export default Cards;
