import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Portfolio
          </Link>
          <div className="flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/projects')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Projetos
            </Link>
            <Link
              to="/skills"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/skills')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                isActive('/contact')
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}; 