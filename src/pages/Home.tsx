import { Box, Container, Heading, Text, Button, VStack, HStack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const Home = () => {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="center" py={20}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h1" size="2xl" mb={4}>
            João Santos
          </Heading>
          <Text fontSize="xl" color="gray.600" textAlign="center">
            Desenvolvedor Full Stack
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Text fontSize="lg" color="gray.600" textAlign="center" maxW="2xl">
            Transformando ideias em código, criando soluções inovadoras e experiências digitais memoráveis.
          </Text>
        </MotionBox>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <HStack spacing={4}>
            <Button colorScheme="blue" size="lg">
              Ver Projetos
            </Button>
            <Button variant="outline" size="lg">
              Contato
            </Button>
          </HStack>
        </MotionBox>
      </VStack>
    </Container>
  )
}

export default Home 