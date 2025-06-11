import { useState, useCallback } from 'react';
import { api } from '../services/api';
import { Project, Message, Skill, ApiResponse } from '../types';

export function useApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRequest = useCallback(async <T>(
    request: () => Promise<ApiResponse<T>>
  ): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      const response = await request();
      return response.data;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Projects
  const getProjects = useCallback(() => 
    handleRequest(api.getProjects), [handleRequest]);
  
  const getFeaturedProjects = useCallback(() => 
    handleRequest(api.getFeaturedProjects), [handleRequest]);
  
  const getProject = useCallback((id: number) => 
    handleRequest(() => api.getProject(id)), [handleRequest]);
  
  const createProject = useCallback((project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => 
    handleRequest(() => api.createProject(project)), [handleRequest]);
  
  const updateProject = useCallback((id: number, project: Partial<Project>) => 
    handleRequest(() => api.updateProject(id, project)), [handleRequest]);
  
  const deleteProject = useCallback(async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      await api.deleteProject(id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  // Messages
  const getMessages = useCallback(() => 
    handleRequest(api.getMessages), [handleRequest]);
  
  const getUnreadMessages = useCallback(() => 
    handleRequest(api.getUnreadMessages), [handleRequest]);
  
  const createMessage = useCallback((message: Omit<Message, 'id' | 'read' | 'createdAt' | 'updatedAt'>) => 
    handleRequest(() => api.createMessage(message)), [handleRequest]);
  
  const markMessageAsRead = useCallback((id: number) => 
    handleRequest(() => api.markMessageAsRead(id)), [handleRequest]);

  // Skills
  const getSkills = useCallback(() => 
    handleRequest(api.getSkills), [handleRequest]);
  
  const getSkillsByCategory = useCallback((category: string) => 
    handleRequest(() => api.getSkillsByCategory(category)), [handleRequest]);
  
  const createSkill = useCallback((skill: Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>) => 
    handleRequest(() => api.createSkill(skill)), [handleRequest]);
  
  const updateSkill = useCallback((id: number, skill: Partial<Skill>) => 
    handleRequest(() => api.updateSkill(id, skill)), [handleRequest]);
  
  const deleteSkill = useCallback(async (id: number) => {
    try {
      setLoading(true);
      setError(null);
      await api.deleteSkill(id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    // Projects
    getProjects,
    getFeaturedProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
    // Messages
    getMessages,
    getUnreadMessages,
    createMessage,
    markMessageAsRead,
    // Skills
    getSkills,
    getSkillsByCategory,
    createSkill,
    updateSkill,
    deleteSkill,
  };
} 