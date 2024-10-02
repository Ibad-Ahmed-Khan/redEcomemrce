import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  VStack,
  useToast,
  Flex,
  Text,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaMap } from "react-icons/fa";
import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.7749, // Default coordinates (San Francisco)
  lng: -122.4194,
};

const Contact = () => {
  const toast = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState(center); // Set default location

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent.",
      description: "We've received your message!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const newLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(newLocation);
        setIsOpen(true);
      });
    } else {
      toast({
        title: "Geolocation not supported.",
        description: "Your browser does not support geolocation.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      bgImage="url('https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352352.jpg')"
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
      p={5}
      align="center"
      justifyContent="center"
    >
      <Box
        // border="3px solid red"
        minW={{ base: "auto", md: "auto", lg: "600px" }}
        mx="auto"
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        backdropFilter="blur(10px)"
      >
        <Heading as="h2" size="xl" mb={6} textAlign="center" color="#2d3748">
          Get in Touch
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              sx={{
                "::placeholder": {
                  color: "#fff", // Change this to your desired color
                },
              }}
              color="#fff"
              placeholder="Your Name"
              size="lg"
              required
              borderColor="#4FD1C5"
              _hover={{ borderColor: "#2C7A7B" }}
              _focus={{
                borderColor: "#2C7A7B",
                boxShadow: "0 0 0 1px #2C7A7B",
              }}
            />
            <Input
              sx={{
                "::placeholder": {
                  color: "#fff", // Change this to your desired color
                },
              }}
              color="#fff"
              placeholder="Your Email"
              type="email"
              size="lg"
              required
              borderColor="#4FD1C5"
              _hover={{ borderColor: "#2C7A7B" }}
              _focus={{
                borderColor: "#2C7A7B",
                boxShadow: "0 0 0 1px #2C7A7B",
              }}
            />
            <Textarea
              sx={{
                "::placeholder": {
                  color: "#fff", // Change this to your desired color
                },
              }}
              color="#fff"
              placeholder="Your Message"
              size="lg"
              required
              rows={6}
              borderColor="#4FD1C5"
              _hover={{ borderColor: "#2C7A7B" }}
              _focus={{
                borderColor: "#2C7A7B",
                boxShadow: "0 0 0 1px #2C7A7B",
              }}
            />
            <Button
              colorScheme="teal"
              size="lg"
              type="submit"
              boxShadow="md"
              transition="background 0.2s"
              _hover={{ bg: "#2C7A7B" }}
            >
              Send Message
            </Button>
          </VStack>
        </form>
        {/* Live Location Button */}
        <Button
          w="full"
          mt={4}
          colorScheme="teal"
          onClick={getLocation}
          leftIcon={<FaMap />}
        >
          Get Live Location
        </Button>
      </Box>

      {/* Modal for Live Location */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Live Location</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={location}
                zoom={15}
              >
                <Marker position={location} />
              </GoogleMap>
            </LoadScript>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default Contact;
