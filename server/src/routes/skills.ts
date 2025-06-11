import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Listar todas as skills
router.get('/', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar skills' });
  }
});

// Criar uma nova skill
router.post('/', async (req, res) => {
  try {
    const { name, level, description } = req.body;
    const skill = await prisma.skill.create({
      data: {
        name,
        level,
        description,
      },
    });
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar skill' });
  }
});

// Atualizar uma skill
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, level, description } = req.body;
    const skill = await prisma.skill.update({
      where: { id: Number(id) },
      data: {
        name,
        level,
        description,
      },
    });
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar skill' });
  }
});

// Excluir uma skill
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.skill.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir skill' });
  }
});

export const skillRoutes = router; 