import request from 'supertest';
import express from 'express';
import { projectRoutes } from '../projects';
import { PrismaClient } from '@prisma/client';

// Mock do PrismaClient
jest.mock('@prisma/client');

const app = express();
app.use(express.json());
app.use('/api/projects', projectRoutes);

describe('Project Routes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get all projects', async () => {
    const mockProjects = [
      {
        id: 1,
        title: 'Projeto Teste',
        description: 'Descrição do projeto teste',
        image: 'teste.jpg',
        technologies: ['React', 'TypeScript'],
        githubUrl: 'https://github.com/teste',
        liveUrl: 'https://teste.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    (PrismaClient.prototype.project.findMany as jest.Mock).mockResolvedValue(mockProjects);

    const response = await request(app).get('/api/projects');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockProjects);
  });

  it('should create a new project', async () => {
    const newProject = {
      title: 'Novo Projeto',
      description: 'Descrição do novo projeto',
      image: 'novo.jpg',
      technologies: ['React', 'Node.js'],
      githubUrl: 'https://github.com/novo',
      liveUrl: 'https://novo.com'
    };

    const createdProject = {
      id: 1,
      ...newProject,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    (PrismaClient.prototype.project.create as jest.Mock).mockResolvedValue(createdProject);

    const response = await request(app)
      .post('/api/projects')
      .send(newProject);

    expect(response.status).toBe(201);
    expect(response.body).toEqual(createdProject);
  });

  it('should update a project', async () => {
    const projectId = 1;
    const updatedProject = {
      title: 'Projeto Atualizado',
      description: 'Nova descrição',
      image: 'atualizado.jpg',
      technologies: ['React', 'TypeScript', 'Node.js'],
      githubUrl: 'https://github.com/atualizado',
      liveUrl: 'https://atualizado.com'
    };

    const project = {
      id: projectId,
      ...updatedProject,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    (PrismaClient.prototype.project.update as jest.Mock).mockResolvedValue(project);

    const response = await request(app)
      .put(`/api/projects/${projectId}`)
      .send(updatedProject);

    expect(response.status).toBe(200);
    expect(response.body).toEqual(project);
  });

  it('should delete a project', async () => {
    const projectId = 1;

    (PrismaClient.prototype.project.delete as jest.Mock).mockResolvedValue({ id: projectId });

    const response = await request(app).delete(`/api/projects/${projectId}`);

    expect(response.status).toBe(204);
  });
}); 