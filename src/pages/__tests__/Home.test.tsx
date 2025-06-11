import { render, screen } from '@testing-library/react';
import { Home } from '../Home';

describe('Home Component', () => {
  it('should render the home page with correct content', () => {
    render(<Home />);
    
    // Verifica se o título principal está presente
    expect(screen.getByText(/João Santos/i)).toBeInTheDocument();
    
    // Verifica se a descrição está presente
    expect(screen.getByText(/Desenvolvedor Full Stack/i)).toBeInTheDocument();
    
    // Verifica se os links de navegação estão presentes
    expect(screen.getByText(/Projetos/i)).toBeInTheDocument();
    expect(screen.getByText(/Habilidades/i)).toBeInTheDocument();
    expect(screen.getByText(/Contato/i)).toBeInTheDocument();
  });

  it('should have correct links in the navigation', () => {
    render(<Home />);
    
    const projectsLink = screen.getByText(/Projetos/i).closest('a');
    const skillsLink = screen.getByText(/Habilidades/i).closest('a');
    const contactLink = screen.getByText(/Contato/i).closest('a');
    
    expect(projectsLink).toHaveAttribute('href', '/projects');
    expect(skillsLink).toHaveAttribute('href', '/skills');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
}); 