import { Project, Message, Skill, ApiResponse } from '../types';

const API_URL = 'http://localhost:5000/api';

export const api = {
  // Projects
  async getProjects(): Promise<ApiResponse<Project[]>> {
    const response = await fetch(`${API_URL}/projects`);
    return response.json();
  },

  async getFeaturedProjects(): Promise<ApiResponse<Project[]>> {
    const response = await fetch(`${API_URL}/projects/featured`);
    return response.json();
  },

  async getProject(id: number): Promise<ApiResponse<Project>> {
    const response = await fetch(`${API_URL}/projects/${id}`);
    return response.json();
  },

  async createProject(project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Project>> {
    const response = await fetch(`${API_URL}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    return response.json();
  },

  async updateProject(id: number, project: Partial<Project>): Promise<ApiResponse<Project>> {
    const response = await fetch(`${API_URL}/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    });
    return response.json();
  },

  async deleteProject(id: number): Promise<void> {
    await fetch(`${API_URL}/projects/${id}`, {
      method: 'DELETE',
    });
  },

  // Messages
  async getMessages(): Promise<ApiResponse<Message[]>> {
    const response = await fetch(`${API_URL}/messages`);
    return response.json();
  },

  async getUnreadMessages(): Promise<ApiResponse<Message[]>> {
    const response = await fetch(`${API_URL}/messages/unread`);
    return response.json();
  },

  async createMessage(message: Omit<Message, 'id' | 'read' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Message>> {
    const response = await fetch(`${API_URL}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    return response.json();
  },

  async markMessageAsRead(id: number): Promise<ApiResponse<Message>> {
    const response = await fetch(`${API_URL}/messages/${id}/read`, {
      method: 'PATCH',
    });
    return response.json();
  },

  // Skills
  async getSkills(): Promise<ApiResponse<Skill[]>> {
    const response = await fetch(`${API_URL}/skills`);
    return response.json();
  },

  async getSkillsByCategory(category: string): Promise<ApiResponse<Skill[]>> {
    const response = await fetch(`${API_URL}/skills/category/${category}`);
    return response.json();
  },

  async createSkill(skill: Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Skill>> {
    const response = await fetch(`${API_URL}/skills`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(skill),
    });
    return response.json();
  },

  async updateSkill(id: number, skill: Partial<Skill>): Promise<ApiResponse<Skill>> {
    const response = await fetch(`${API_URL}/skills/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(skill),
    });
    return response.json();
  },

  async deleteSkill(id: number): Promise<void> {
    await fetch(`${API_URL}/skills/${id}`, {
      method: 'DELETE',
    });
  },
}; 