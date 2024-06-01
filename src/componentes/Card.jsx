import React from "react";
import { Box, Image, Badge, Text, VStack } from "@chakra-ui/react";

const Card = ({ title, description, imageUrl, badge }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Image src={imageUrl} alt={title} />

      <Box p={6}>
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {badge}
          </Badge>
        </Box>

        <VStack align="start" mt={2}>
          <Text fontWeight="bold" fontSize="xl">
            {title}
          </Text>
          <Text mt={2}>{description}</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default Card;
