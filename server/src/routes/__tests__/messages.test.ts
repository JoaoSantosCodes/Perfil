import request from 'supertest';
import express from 'express';
import { messageRoutes } from '../messages';
import { PrismaClient } from '@prisma/client';

// Mock do PrismaClient
jest.mock('@prisma/client');

const app = express();
app.use(express.json());
app.use('/api/messages', messageRoutes);

describe('Message Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get all messages', async () => {
    const mockMessages = [
      {
        id: 1,
        name: 'João Silva',
        email: 'joao@teste.com',
        message: 'Teste de mensagem 1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Maria Santos',
        email: 'maria@teste.com',
        message: 'Teste de mensagem 2',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    (PrismaClient.prototype.message.findMany as jest.Mock).mockResolvedValue(mockMessages);

    const response = await request(app).get('/api/messages');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockMessages);
  });

  it('should create a new message', async () => {
    const newMessage = {
      name: 'Pedro Oliveira',
      email: 'pedro@teste.com',
      message: 'Nova mensagem de teste'
    };

    const createdMessage = {
      id: 3,
      ...newMessage,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    (PrismaClient.prototype.message.create as jest.Mock).mockResolvedValue(createdMessage);

    const response = await request(app)
      .post('/api/messages')
      .send(newMessage);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(createdMessage);
  });

  it('should delete a message', async () => {
    const messageId = 1;

    (PrismaClient.prototype.message.delete as jest.Mock).mockResolvedValue({ id: messageId });

    const response = await request(app).delete(`/api/messages/${messageId}`);

    expect(response.status).toBe(204);
  });

  it('should validate required fields when creating a message', async () => {
    const invalidMessage = {
      name: 'João Silva'
      // email e message faltando
    };

    const response = await request(app)
      .post('/api/messages')
      .send(invalidMessage);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
}); 