import express from 'express';
import prisma from '../../lib/prisma';

const router = express.Router();

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

// Get unread messages
router.get('/unread', async (req, res) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        read: false
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching unread messages' });
  }
});

// Get message by ID
router.get('/:id', async (req, res) => {
  try {
    const message = await prisma.message.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    });
    if (!message) {
      return res.status(404).json({ error: 'Message not found' });
    }
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching message' });
  }
});

// Create new message
router.post('/', async (req, res) => {
  try {
    const message = await prisma.message.create({
      data: req.body
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ error: 'Error creating message' });
  }
});

// Mark message as read
router.patch('/:id/read', async (req, res) => {
  try {
    const message = await prisma.message.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: {
        read: true
      }
    });
    res.json(message);
  } catch (error) {
    res.status(500).json({ error: 'Error updating message' });
  }
});

// Delete message
router.delete('/:id', async (req, res) => {
  try {
    await prisma.message.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error deleting message' });
  }
});

export default router; 