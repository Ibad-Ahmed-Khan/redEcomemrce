import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Button,
  VStack,
  Input,
  Textarea,
  Grid,
  GridItem,
  useBreakpointValue,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Box bg="#fff" minH="100vh" p={5}>
      {/* Hero Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        py={10}
      >
        <Box flex="1" p={5}>
          <Heading as="h2" size="2xl" mb={4} color="#2d3748">
            Who We Are
          </Heading>
          <Text fontSize="lg" mb={4} color="#4a5568">
            We are a dedicated team of professionals focused on delivering
            innovative solutions and exceptional experiences.
          </Text>
          <Text fontSize="lg" mb={6} color="#4a5568">
            Our mission is to empower individuals and organizations through
            technology, creativity, and collaboration.
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => alert("Learn more!")}
          >
            Discover Our Journey
          </Button>
        </Box>
        <Image
          src="https://img.freepik.com/free-photo/happy-boy-with-adorable-smile_23-2149352352.jpg" // Replace with a relevant image
          alt="Team Image"
          boxShadow="lg"
          maxW={{ base: "100%", md: "500px" }}
          mb={{ base: 4, md: 0 }}
        />
      </Flex>

      {/* Team Section */}
      <Box mt={10} maxW="1200px" mx="auto" py={10}>
        <Heading as="h3" size="xl" textAlign="center" mb={8} color="#2d3748">
          Meet Our Team
        </Heading>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
          gap={6}
        >
          {teamMembers.map((member, index) => (
            <GridItem
              key={index}
              borderRadius="lg"
              boxShadow="md"
              overflow="hidden"
              bg="white"
              textAlign="center"
              paddingBlock="1rem"
            >
              <Flex flexDir="column" align="center" justify="center">
                <Image
                  src={member.image}
                  alt={member.name}
                  borderRadius="full"
                  boxSize="150px"
                  objectFit="contain"
                  mt={4}
                />
                <Heading as="h4" size="md" my={2} color="#2d3748">
                  {member.name}
                </Heading>
                <Text color="#4a5568" mb={4}>
                  {member.position}
                </Text>
                <Text px={4} color="#4a5568">
                  {member.bio}
                </Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Box>

      {/* Testimonials Section */}
      {/* Testimonials Section */}
      <Box
        mt={10}
        maxW="1200px"
        mx="auto"
        py={10}
        bg="#fff"
        borderRadius="md"
        boxShadow="md"
      >
        <Heading as="h3" size="xl" textAlign="center" mb={8} color="#2d3748">
          What Our Clients Say
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="space-around">
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              p={5}
              borderWidth="1px"
              borderRadius="lg"
              bg="#f7fafc"
              boxShadow="lg"
              m={2}
              position="relative"
            >
              {/* Optional Icon */}
              <Box
                position="absolute"
                top={-5}
                left={5}
                fontSize="3xl"
                color="teal.500"
              >
                <Text>💬</Text>
              </Box>
              <Text color="#4a5568" fontStyle="italic">
                "{testimonial.quote}"
              </Text>
              <Text mt={4} fontWeight="bold" color="#2d3748">
                {testimonial.name}
              </Text>
              <Text color="#4a5568">{testimonial.position}</Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

const teamMembers = [
  {
    name: "Alice Johnson",
    position: "CEO",
    bio: "Alice is a visionary leader with over 10 years of experience in the tech industry.",
    image:
      "https://www.shutterstock.com/image-photo/cute-smiling-boy-plain-white-600nw-2159990535.jpg", // Replace with team member image
  },
  {
    name: "John Smith",
    position: "CTO",
    bio: "John specializes in software development and leads our tech team with passion.",
    image:
      "https://thumbs.dreamstime.com/b/caucasian-boy-did-something-now-doesn-t-know-what-to-do-caucasian-boy-did-something-now-doesn-t-know-what-to-do-stand-196213615.jpg", // Replace with team member image
  },
  {
    name: "Emily Davis",
    position: "Marketing Director",
    bio: "Emily has a knack for storytelling and creating compelling marketing strategies.",
    image:
      "https://media.istockphoto.com/id/1298623104/photo/happy-young-caucasian-boy-in-casual-outfit-with-arms-crossed-isolated-over-white-background.jpg?s=612x612&w=0&k=20&c=9fHNGNfGAIyviDNmBvsYc8tjhSd4sL3b-2I5gd9bMIg=", // Replace with team member image
  },
];

const testimonials = [
  {
    quote: "They transformed our business with their innovative solutions!",
    name: "Sarah Brown",
    position: "CEO, XYZ Corp",
  },
  {
    quote: "Outstanding service and support throughout our project.",
    name: "Michael Green",
    position: "Manager, ABC Inc",
  },
  {
    quote: "Highly recommend! Their team is dedicated and skilled.",
    name: "Laura White",
    position: "Director, 123 Ltd",
  },
];

export default About;
