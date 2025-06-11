export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
} 