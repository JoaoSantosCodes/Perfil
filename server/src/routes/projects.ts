import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Listar todos os projetos
router.get('/', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar projetos' });
  }
});

// Criar um novo projeto
router.post('/', async (req, res) => {
  try {
    const { title, description, image, technologies, githubUrl, liveUrl } = req.body;
    const project = await prisma.project.create({
      data: {
        title,
        description,
        image,
        technologies,
        githubUrl,
        liveUrl,
      },
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar projeto' });
  }
});

// Atualizar um projeto
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, technologies, githubUrl, liveUrl } = req.body;
    const project = await prisma.project.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        image,
        technologies,
        githubUrl,
        liveUrl,
      },
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar projeto' });
  }
});

// Excluir um projeto
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.project.delete({
      where: { id: Number(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir projeto' });
  }
});

export const projectRoutes = router; 