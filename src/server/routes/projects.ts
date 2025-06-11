import express from 'express';
import prisma from '../../lib/prisma';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching projects' });
  }
});

// Get featured projects
router.get('/featured', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      where: {
        featured: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching featured projects' });
  }
});

// Get project by ID
router.get('/:id', async (req, res) => {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    });
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching project' });
  }
});

// Create new project
router.post('/', async (req, res) => {
  try {
    const project = await prisma.project.create({
      data: {
        ...req.body,
        technologies: JSON.stringify(req.body.technologies)
      }
    });
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error creating project' });
  }
});

// Update project
router.put('/:id', async (req, res) => {
  try {
    const project = await prisma.project.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: {
        ...req.body,
        technologies: JSON.stringify(req.body.technologies)
      }
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: 'Error updating project' });
  }
});

// Delete project
router.delete('/:id', async (req, res) => {
  try {
    await prisma.project.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting project' });
  }
});

export default router; 