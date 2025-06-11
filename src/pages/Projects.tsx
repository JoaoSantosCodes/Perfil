import { Box, Container, Heading, SimpleGrid, VStack, Image, Text, Badge, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Uma plataforma completa de e-commerce com carrinho de compras, pagamentos e gestão de produtos.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Task Manager',
    description: 'Aplicativo de gerenciamento de tarefas com autenticação e sincronização em tempo real.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'Firebase', 'Material-UI'],
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Website pessoal com design moderno e responsivo.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'Chakra UI', 'Framer Motion'],
    link: '#'
  }
]

const Projects = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={12} align="stretch">
        <Heading as="h1" size="2xl">
          Projetos
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
              >
                <Image src={project.image} alt={project.title} w="100%" h="200px" objectFit="cover" />
                <Box p={6}>
                  <Heading as="h3" size="md" mb={2}>
                    {project.title}
                  </Heading>
                  <Text color="gray.600" mb={4}>
                    {project.description}
                  </Text>
                  <Box mb={4}>
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} colorScheme="blue" mr={2} mb={2}>
                        {tech}
                      </Badge>
                    ))}
                  </Box>
                  <Link href={project.link} color="blue.500" fontWeight="medium">
                    Ver Projeto →
                  </Link>
                </Box>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  )
}

export default Projects 