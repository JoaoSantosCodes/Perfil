import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, data: projects });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error fetching projects' });
  }
});

router.post('/projects', async (req, res) => {
  try {
    const project = await prisma.project.create({
      data: {
        ...req.body,
        technologies: req.body.technologies.split(',').map((t: string) => t.trim()),
      },
    });
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error creating project' });
  }
});

router.put('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const project = await prisma.project.update({
      where: { id: Number(id) },
      data: {
        ...req.body,
        technologies: req.body.technologies.split(',').map((t: string) => t.trim()),
      },
    });
    res.json({ success: true, data: project });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error updating project' });
  }
});

router.delete('/projects/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.project.delete({
      where: { id: Number(id) },
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error deleting project' });
  }
});

// Skills
router.get('/skills', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: { category: 'asc' },
    });
    res.json({ success: true, data: skills });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error fetching skills' });
  }
});

router.post('/skills', async (req, res) => {
  try {
    const skill = await prisma.skill.create({
      data: req.body,
    });
    res.json({ success: true, data: skill });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error creating skill' });
  }
});

router.put('/skills/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await prisma.skill.update({
      where: { id: Number(id) },
      data: req.body,
    });
    res.json({ success: true, data: skill });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error updating skill' });
  }
});

router.delete('/skills/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.skill.delete({
      where: { id: Number(id) },
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error deleting skill' });
  }
});

// Messages
router.get('/messages', async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error fetching messages' });
  }
});

router.post('/messages', async (req, res) => {
  try {
    const message = await prisma.message.create({
      data: req.body,
    });
    res.json({ success: true, data: message });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error creating message' });
  }
});

router.delete('/messages/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.message.delete({
      where: { id: Number(id) },
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Error deleting message' });
  }
});

export default router; 