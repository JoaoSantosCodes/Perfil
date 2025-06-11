# Portfolio Pessoal

Um portfolio pessoal moderno e responsivo desenvolvido com React, TypeScript, Tailwind CSS e Express.

## Sobre o Projeto

Este repositório contém o código fonte para meu perfil profissional online, desenvolvido com tecnologias modernas de web development.

## Tecnologias Utilizadas

- **Frontend**:
  - React
  - TypeScript
  - Tailwind CSS
  - React Router
  - Vite

- **Backend**:
  - Express
  - Prisma
  - SQLite
  - TypeScript

## Funcionalidades

- Exibição de projetos
- Listagem de skills
- Formulário de contato
- Painel administrativo para gerenciamento de conteúdo

## Estrutura do Projeto

```
portfolio/
├── src/
│   ├── components/        # Componentes React
│   │   ├── admin/        # Componentes do painel admin
│   │   └── ...
│   ├── hooks/            # Custom hooks
│   ├── routes/           # Configuração de rotas
│   ├── server/           # Servidor Express
│   ├── types/            # Definições de tipos
│   └── ...
├── prisma/               # Configuração do Prisma
├── public/              # Arquivos estáticos
└── ...
```

## Configuração do Ambiente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/portfolio.git
   cd portfolio
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione as seguintes variáveis:
     ```
     DATABASE_URL="file:./dev.db"
     PORT=5000
     ```

4. Configure o banco de dados:
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   npm run prisma:seed
   ```

5. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev:server
   ```

6. Em outro terminal, inicie o frontend:
   ```bash
   npm run dev
   ```

## Painel Administrativo

O painel administrativo está disponível em `/admin` e oferece as seguintes funcionalidades:

- Gerenciamento de projetos (criar, editar, excluir)
- Gerenciamento de skills (criar, editar, excluir)
- Visualização e exclusão de mensagens recebidas

Para acessar o painel:
1. Acesse `/admin/login`
2. Use a senha padrão: `admin123`

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento do frontend
- `npm run dev:server`: Inicia o servidor de desenvolvimento do backend
- `npm run build`: Gera a build de produção
- `npm run preview`: Visualiza a build de produção
- `npm run prisma:studio`: Abre o Prisma Studio para gerenciar o banco de dados
- `npm run prisma:seed`: Popula o banco de dados com dados iniciais

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'feat: adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. 