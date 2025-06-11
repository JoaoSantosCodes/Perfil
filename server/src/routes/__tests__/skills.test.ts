import request from 'supertest';
import express from 'express';
import { skillRoutes } from '../skills';
import { PrismaClient } from '@prisma/client';

// Mock do PrismaClient
jest.mock('@prisma/client');

const app = express();
app.use(express.json());
app.use('/api/skills', skillRoutes);

describe('Skill Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get all skills', async () => {
    const mockSkills = [
      {
        id: 1,
        name: 'React',
        level: 90,
        description: 'Desenvolvimento de interfaces com React',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'TypeScript',
        level: 85,
        description: 'Desenvolvimento com TypeScript',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    (PrismaClient.prototype.skill.findMany as jest.Mock).mockResolvedValue(mockSkills);

    const response = await request(app).get('/api/skills');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockSkills);
  });

  it('should create a new skill', async () => {
    const newSkill = {
      name: 'Node.js',
      level: 80,
      description: 'Desenvolvimento backend com Node.js'
    };

    const createdSkill = {
      id: 3,
      ...newSkill,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    (PrismaClient.prototype.skill.create as jest.Mock).mockResolvedValue(createdSkill);

    const response = await request(app)
      .post('/api/skills')
      .send(newSkill);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(createdSkill);
  });

  it('should update a skill', async () => {
    const skillId = 1;
    const updatedSkill = {
      name: 'React',
      level: 95,
      description: 'Desenvolvimento avançado com React'
    };

    const skill = {
      id: skillId,
      ...updatedSkill,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    (PrismaClient.prototype.skill.update as jest.Mock).mockResolvedValue(skill);

    const response = await request(app)
      .put(`/api/skills/${skillId}`)
      .send(updatedSkill);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(skill);
  });

  it('should delete a skill', async () => {
    const skillId = 1;

    (PrismaClient.prototype.skill.delete as jest.Mock).mockResolvedValue({ id: skillId });

    const response = await request(app).delete(`/api/skills/${skillId}`);

    expect(response.status).toBe(204);
  });
}); 