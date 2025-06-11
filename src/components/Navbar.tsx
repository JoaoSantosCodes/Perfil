import { Box, Flex, Link, Button, useColorMode } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box as="nav" bg="white" boxShadow="sm" py={4}>
      <Flex maxW="container.xl" mx="auto" px={4} align="center" justify="space-between">
        <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
          João Santos
        </Link>
        
        <Flex gap={6}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none', color: 'blue.500' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" _hover={{ textDecoration: 'none', color: 'blue.500' }}>
            Sobre
          </Link>
          <Link as={RouterLink} to="/projects" _hover={{ textDecoration: 'none', color: 'blue.500' }}>
            Projetos
          </Link>
          <Link as={RouterLink} to="/contact" _hover={{ textDecoration: 'none', color: 'blue.500' }}>
            Contato
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? '🌙' : '☀️'}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Navbar 