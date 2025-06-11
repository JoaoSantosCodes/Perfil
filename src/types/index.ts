export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  icon?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
} 