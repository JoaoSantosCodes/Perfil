import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { projectRoutes } from './routes/projects';
import { skillRoutes } from './routes/skills';
import { messageRoutes } from './routes/messages';

const app = express();
const prisma = new PrismaClient();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/projects', projectRoutes);
app.use('/skills', skillRoutes);
app.use('/messages', messageRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 