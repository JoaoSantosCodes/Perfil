import Project from '../models/Project';
import Skill from '../models/Skill';

export const initialProjects = [
  {
    title: 'E-commerce Platform',
    description: 'Uma plataforma completa de e-commerce com carrinho de compras, pagamentos e gestão de produtos.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    githubLink: 'https://github.com/username/ecommerce',
    featured: true
  },
  {
    title: 'Task Manager',
    description: 'Aplicativo de gerenciamento de tarefas com autenticação e sincronização em tempo real.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'Firebase', 'Material-UI'],
    link: '#',
    githubLink: 'https://github.com/username/task-manager',
    featured: true
  },
  {
    title: 'Portfolio Website',
    description: 'Website pessoal com design moderno e responsivo.',
    image: 'https://via.placeholder.com/400x300',
    technologies: ['React', 'Chakra UI', 'Framer Motion'],
    link: '#',
    githubLink: 'https://github.com/username/portfolio',
    featured: true
  }
];

export const initialSkills = [
  {
    name: 'React',
    category: 'frontend',
    level: 5,
    icon: 'FaReact',
    order: 1
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    level: 4,
    icon: 'SiTypescript',
    order: 2
  },
  {
    name: 'Node.js',
    category: 'backend',
    level: 4,
    icon: 'FaNodeJs',
    order: 3
  },
  {
    name: 'MongoDB',
    category: 'database',
    level: 4,
    icon: 'SiMongodb',
    order: 4
  },
  {
    name: 'Git',
    category: 'tools',
    level: 5,
    icon: 'FaGitAlt',
    order: 5
  }
];

export const seedDatabase = async () => {
  try {
    // Limpar dados existentes
    await Project.deleteMany({});
    await Skill.deleteMany({});

    // Inserir novos dados
    await Project.insertMany(initialProjects);
    await Skill.insertMany(initialSkills);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}; 