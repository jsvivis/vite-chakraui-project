import React from "react";
import { Box, Text, VStack, Avatar } from "@chakra-ui/react";

const Testimonial = ({ name, feedback, imageUrl }) => {
  return (
    <Box
      maxW="md"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      boxShadow="md"
    >
      <VStack align="center" spacing={4}>
        <Avatar size="xl" src={imageUrl} />
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Text textAlign="center">{feedback}</Text>
      </VStack>
    </Box>
  );
};

export default Testimonial;
