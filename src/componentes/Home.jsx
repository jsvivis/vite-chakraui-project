import React from "react";
import { Box, Heading, Text, Button, VStack, Image, SimpleGrid } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box p={4} maxW="1200px" mx="auto">
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="2xl" textAlign="center" mb={4}>
            Bem-vindo à Minha Página Inicial
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Esta é uma página inicial de exemplo criada com Vite, React, JavaScript e Chakra UI.
          </Text>
          <Image
            src="https://via.placeholder.com/600x400"
            alt="Imagem de exemplo"
            borderRadius="md"
          />
          <Text fontSize="md" textAlign="center">
            Chakra UI é uma biblioteca de componentes React que facilita a construção de interfaces de usuário modernas e responsivas.
          </Text>
          <Button colorScheme="teal" size="lg" alignSelf="center">
            Saiba Mais
          </Button>
        </VStack>

        <Heading as="h2" size="xl" textAlign="center" mt={8} mb={4}>
          Nossos Serviços
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Card
            title="Serviço 1"
            description="Descrição do serviço 1."
            imageUrl="https://via.placeholder.com/300x200"
            badge="Novo"
          />
          <Card
            title="Serviço 2"
            description="Descrição do serviço 2."
            imageUrl="https://via.placeholder.com/300x200"
            badge="Popular"
          />
          <Card
            title="Serviço 3"
            description="Descrição do serviço 3."
            imageUrl="https://via.placeholder.com/300x200"
            badge="Recomendado"
          />
        </SimpleGrid>

        <Heading as="h2" size="xl" textAlign="center" mt={8} mb={4}>
          Depoimentos
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Testimonial
            name="Cliente 1"
            feedback="Este é o melhor serviço que já usei!"
            imageUrl="https://via.placeholder.com/100"
          />
          <Testimonial
            name="Cliente 2"
            feedback="Extremamente satisfeito com os resultados."
            imageUrl="https://via.placeholder.com/100"
          />
        </SimpleGrid>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
