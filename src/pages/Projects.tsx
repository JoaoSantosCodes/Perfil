import { useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';
import { Project } from '../types';
import { Box, Container, Heading, SimpleGrid, VStack, Image, Text, Badge, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export const Projects = () => {
  const { getProjects } = useApi();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await getProjects();
        setProjects(projectsData);
      } catch (error) {
        console.error('Erro ao carregar projetos:', error);
      }
    };

    fetchProjects();
  }, [getProjects]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={12} align="stretch">
        <Heading as="h1" size="2xl">
          Projetos
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {projects.map((project) => (
            <MotionBox
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
            >
              <Box
                bg="white"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="md"
                _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
              >
                {project.image && (
                  <Image src={project.image} alt={project.title} w="100%" h="200px" objectFit="cover" />
                )}
                <Box p={6}>
                  <Heading as="h3" size="md" mb={2}>
                    {project.title}
                  </Heading>
                  <Text color="gray.600" mb={4}>
                    {project.description}
                  </Text>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} colorScheme="blue" mr={2} mb={2}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.githubUrl && (
                    <Link href={project.githubUrl} color="blue.500" fontWeight="medium">
                      Ver no GitHub
                    </Link>
                  )}
                </Box>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Projects 