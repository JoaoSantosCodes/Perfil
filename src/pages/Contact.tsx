import { Box, Container, Heading, VStack, FormControl, FormLabel, Input, Textarea, Button, useToast } from '@chakra-ui/react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const toast = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar o formulário
    toast({
      title: 'Mensagem enviada!',
      description: 'Obrigado por entrar em contato. Retornarei em breve.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <Container maxW="container.md" py={12}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Entre em Contato
        </Heading>

        <Box as="form" onSubmit={handleSubmit} bg="white" p={8} borderRadius="lg" boxShadow="md">
          <VStack spacing={6}>
            <FormControl isRequired>
              <FormLabel>Nome</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Mensagem</FormLabel>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Sua mensagem..."
                rows={6}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
              _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
            >
              Enviar Mensagem
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  )
}

export default Contact 