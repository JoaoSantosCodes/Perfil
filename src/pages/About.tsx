import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon } from '@chakra-ui/react'
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa'

const skills = [
  {
    icon: FaCode,
    title: 'Frontend',
    description: 'React, TypeScript, HTML5, CSS3, JavaScript'
  },
  {
    icon: FaServer,
    title: 'Backend',
    description: 'Node.js, Express, Python, Django'
  },
  {
    icon: FaDatabase,
    title: 'Database',
    description: 'PostgreSQL, MongoDB, MySQL'
  },
  {
    icon: FaTools,
    title: 'Tools',
    description: 'Git, Docker, AWS, CI/CD'
  }
]

const About = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={12} align="stretch">
        <Box>
          <Heading as="h1" size="2xl" mb={6}>
            Sobre Mim
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl">
            Sou um desenvolvedor Full Stack apaixonado por criar soluções tecnológicas inovadoras.
            Com experiência em desenvolvimento web e mobile, busco sempre aprender novas tecnologias
            e melhorar minhas habilidades.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={8}>
            Habilidades
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {skills.map((skill, index) => (
              <Box
                key={index}
                p={6}
                bg="white"
                borderRadius="lg"
                boxShadow="md"
                _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
              >
                <VStack spacing={4}>
                  <Icon as={skill.icon} w={10} h={10} color="blue.500" />
                  <Heading as="h3" size="md">
                    {skill.title}
                  </Heading>
                  <Text color="gray.600" textAlign="center">
                    {skill.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  )
}

export default About 