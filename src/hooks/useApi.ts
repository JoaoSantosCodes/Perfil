import { useState, useCallback } from 'react';
import { api } from '../services/api';
import { Project, Message, Skill, ApiResponse } from '../types';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRequest = async <T,>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> => {
    try {
      setLoading(true);
      setError('');

      const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ApiResponse<T> = await response.json();
      return data.data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Projects
  const getProjects = async (): Promise<Project[]> => {
    const response = await fetch(`${API_URL}/projects`);
    if (!response.ok) {
      throw new Error('Erro ao carregar projetos');
    }
    return response.json();
  };

  const createProject = (project: Omit<Project, 'id'>) =>
    handleRequest<Project>('/projects', {
      method: 'POST',
      body: JSON.stringify(project),
    });

  const updateProject = (id: number, project: Partial<Project>) =>
    handleRequest<Project>(`/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(project),
    });

  const deleteProject = (id: number) =>
    handleRequest<void>(`/projects/${id}`, {
      method: 'DELETE',
    });

  // Skills
  const getSkills = async (): Promise<Skill[]> => {
    const response = await fetch(`${API_URL}/skills`);
    if (!response.ok) {
      throw new Error('Erro ao carregar skills');
    }
    return response.json();
  };

  const createSkill = (skill: Omit<Skill, 'id'>) =>
    handleRequest<Skill>('/skills', {
      method: 'POST',
      body: JSON.stringify(skill),
    });

  const updateSkill = (id: number, skill: Partial<Skill>) =>
    handleRequest<Skill>(`/skills/${id}`, {
      method: 'PUT',
      body: JSON.stringify(skill),
    });

  const deleteSkill = (id: number) =>
    handleRequest<void>(`/skills/${id}`, {
      method: 'DELETE',
    });

  // Messages
  const getMessages = () => handleRequest<Message[]>('/messages');

  const sendMessage = async (message: Omit<Message, 'id'>): Promise<Message> => {
    const response = await fetch(`${API_URL}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error('Erro ao enviar mensagem');
    }

    return response.json();
  };

  const deleteMessage = (id: number) =>
    handleRequest<void>(`/messages/${id}`, {
      method: 'DELETE',
    });

  return {
    loading,
    error,
    getProjects,
    createProject,
    updateProject,
    deleteProject,
    getSkills,
    createSkill,
    updateSkill,
    deleteSkill,
    getMessages,
    sendMessage,
    deleteMessage,
  };
}; 