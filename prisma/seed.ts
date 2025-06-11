import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Limpar dados existentes
  await prisma.message.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.project.deleteMany();

  // Criar projetos
  const projects = await Promise.all([
    prisma.project.create({
      data: {
        title: 'E-commerce Platform',
        description:
          'Uma plataforma completa de e-commerce com carrinho de compras, pagamentos e gestão de produtos.',
        image: 'https://via.placeholder.com/400x300',
        technologies: ['React', 'Node.js', 'MongoDB'],
        githubUrl: 'https://github.com/username/ecommerce',
        liveUrl: 'https://ecommerce-demo.com',
      },
    }),
    prisma.project.create({
      data: {
        title: 'Task Manager',
        description:
          'Aplicativo de gerenciamento de tarefas com autenticação e sincronização em tempo real.',
        image: 'https://via.placeholder.com/400x300',
        technologies: ['React', 'Firebase', 'Material-UI'],
        githubUrl: 'https://github.com/username/task-manager',
        liveUrl: 'https://task-manager-demo.com',
      },
    }),
    prisma.project.create({
      data: {
        title: 'Portfolio Website',
        description: 'Website pessoal com design moderno e responsivo.',
        image: 'https://via.placeholder.com/400x300',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        githubUrl: 'https://github.com/username/portfolio',
        liveUrl: 'https://portfolio-demo.com',
      },
    }),
  ]);

  // Criar skills
  const skills = await Promise.all([
    prisma.skill.create({
      data: {
        name: 'React',
        level: 90,
        description: 'Desenvolvimento de interfaces com React e React Native',
      },
    }),
    prisma.skill.create({
      data: {
        name: 'Node.js',
        level: 85,
        description: 'Desenvolvimento de APIs e aplicações backend',
      },
    }),
    prisma.skill.create({
      data: {
        name: 'TypeScript',
        level: 80,
        description: 'Desenvolvimento com TypeScript e tipagem estática',
      },
    }),
    prisma.skill.create({
      data: {
        name: 'SQL',
        level: 75,
        description: 'Modelagem e consultas em bancos de dados relacionais',
      },
    }),
    prisma.skill.create({
      data: {
        name: 'MongoDB',
        level: 70,
        description: 'Trabalho com bancos de dados NoSQL',
      },
    }),
  ]);

  // Criar mensagens
  const messages = await Promise.all([
    prisma.message.create({
      data: {
        name: 'João Silva',
        email: 'joao@email.com',
        message: 'Gostei muito do seu trabalho! Podemos conversar sobre uma oportunidade?',
      },
    }),
    prisma.message.create({
      data: {
        name: 'Maria Santos',
        email: 'maria@email.com',
        message: 'Parabéns pelo portfolio! Muito bem estruturado.',
      },
    }),
  ]);

  console.log('Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 