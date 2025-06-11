import { render, screen, waitFor } from '@testing-library/react';
import { Skills } from '../Skills';
import { useApi } from '../../hooks/useApi';

// Mock do hook useApi
jest.mock('../../hooks/useApi');

const mockSkills = [
  {
    id: 1,
    name: 'React',
    level: 90,
    description: 'Desenvolvimento de interfaces com React'
  },
  {
    id: 2,
    name: 'TypeScript',
    level: 85,
    description: 'Desenvolvimento com TypeScript'
  }
];

describe('Skills Component', () => {
  beforeEach(() => {
    (useApi as jest.Mock).mockReturnValue({
      getSkills: jest.fn().mockResolvedValue(mockSkills)
    });
  });

  it('should render skills list', async () => {
    render(<Skills />);
    
    // Verifica se o título está presente
    expect(screen.getByText(/Habilidades/i)).toBeInTheDocument();
    
    // Aguarda o carregamento das habilidades
    await waitFor(() => {
      expect(screen.getByText('React')).toBeInTheDocument();
      expect(screen.getByText('TypeScript')).toBeInTheDocument();
    });
  });

  it('should display skill levels', async () => {
    render(<Skills />);
    
    await waitFor(() => {
      const reactLevel = screen.getByText('90%');
      const typescriptLevel = screen.getByText('85%');
      
      expect(reactLevel).toBeInTheDocument();
      expect(typescriptLevel).toBeInTheDocument();
    });
  });

  it('should display skill descriptions', async () => {
    render(<Skills />);
    
    await waitFor(() => {
      expect(screen.getByText('Desenvolvimento de interfaces com React')).toBeInTheDocument();
      expect(screen.getByText('Desenvolvimento com TypeScript')).toBeInTheDocument();
    });
  });
}); 