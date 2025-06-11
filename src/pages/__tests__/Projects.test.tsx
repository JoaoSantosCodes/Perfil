import { render, screen, waitFor } from '@testing-library/react';
import { Projects } from '../Projects';
import { useApi } from '../../hooks/useApi';

// Mock do hook useApi
jest.mock('../../hooks/useApi');

const mockProjects = [
  {
    id: 1,
    title: 'Projeto Teste',
    description: 'Descrição do projeto teste',
    image: 'teste.jpg',
    technologies: ['React', 'TypeScript'],
    githubUrl: 'https://github.com/teste',
    liveUrl: 'https://teste.com'
  }
];

describe('Projects Component', () => {
  beforeEach(() => {
    (useApi as jest.Mock).mockReturnValue({
      getProjects: jest.fn().mockResolvedValue(mockProjects)
    });
  });

  it('should render projects list', async () => {
    render(<Projects />);
    
    // Verifica se o título está presente
    expect(screen.getByText(/Projetos/i)).toBeInTheDocument();
    
    // Aguarda o carregamento dos projetos
    await waitFor(() => {
      expect(screen.getByText('Projeto Teste')).toBeInTheDocument();
      expect(screen.getByText('Descrição do projeto teste')).toBeInTheDocument();
    });
  });

  it('should display project technologies', async () => {
    render(<Projects />);
    
    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
    });
  });

  it('should have correct links for project actions', async () => {
    render(<Projects />);
    
    await waitFor(() => {
      const githubLink = screen.getByText('GitHub').closest('a');
      const liveLink = screen.getByText('Demo').closest('a');
      
      expect(githubLink).toHaveAttribute('href', 'https://github.com/teste');
      expect(liveLink).toHaveAttribute('href', 'https://teste.com');
    });
  });
}); 