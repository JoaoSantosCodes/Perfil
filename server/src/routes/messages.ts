import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Listar todas as mensagens
router.get('/', async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar mensagens' });
  }
});

// Criar uma nova mensagem
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = await prisma.message.create({
      data: {
        name,
        email,
        message,
      },
    });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar mensagem' });
  }
});

// Excluir uma mensagem
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.message.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir mensagem' });
  }
});

export const messageRoutes = router; 