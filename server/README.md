# Servidor do Portfolio

Este é o servidor backend para o portfolio pessoal, desenvolvido com Express, TypeScript e Prisma.

## Configuração

1. Instale as dependências:
```bash
npm install
```

2. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
```
DATABASE_URL="file:./dev.db"
PORT=3000
```

3. Configure o banco de dados:
```bash
npm run db:push
```

4. Popule o banco de dados com dados iniciais:
```bash
npm run db:seed
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento
- `npm run build`: Compila o código TypeScript
- `npm run start`: Inicia o servidor em modo de produção
- `npm run db:push`: Atualiza o esquema do banco de dados
- `npm run db:seed`: Popula o banco de dados com dados iniciais

## Estrutura do Projeto

- `src/`: Código fonte do servidor
  - `index.ts`: Ponto de entrada da aplicação
  - `routes/`: Rotas da API
  - `controllers/`: Controladores da API
  - `middlewares/`: Middlewares do Express
- `prisma/`: Configuração do Prisma
  - `schema.prisma`: Esquema do banco de dados
 