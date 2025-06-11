import express from 'express';
import prisma from '../../lib/prisma';

const router = express.Router();

// Get all skills
router.get('/', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: {
        order: 'asc'
      }
    });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching skills' });
  }
});

// Get skills by category
router.get('/category/:category', async (req, res) => {
  try {
    const skills = await prisma.skill.findMany({
      where: {
        category: req.params.category
      },
      orderBy: {
        order: 'asc'
      }
    });
    res.json(skills);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching skills by category' });
  }
});

// Get skill by ID
router.get('/:id', async (req, res) => {
  try {
    const skill = await prisma.skill.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    });
    if (!skill) {
      return res.status(404).json({ error: 'Skill not found' });
    }
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching skill' });
  }
});

// Create new skill
router.post('/', async (req, res) => {
  try {
    const skill = await prisma.skill.create({
      data: req.body
    });
    res.status(201).json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Error creating skill' });
  }
});

// Update skill
router.put('/:id', async (req, res) => {
  try {
    const skill = await prisma.skill.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    });
    res.json(skill);
  } catch (error) {
    res.status(500).json({ error: 'Error updating skill' });
  }
});

// Delete skill
router.delete('/:id', async (req, res) => {
  try {
    await prisma.skill.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting skill' });
  }
});

export default router; 