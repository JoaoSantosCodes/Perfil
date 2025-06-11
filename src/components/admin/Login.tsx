import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Por enquanto, usando uma senha fixa. Depois implementaremos autenticação real
    if (password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      navigate('/admin/dashboard');
    } else {
      setError('Senha incorreta');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite a senha"
            />
          </div>
          {error && (
            <div className="mb-4 text-red-500 text-sm">{error}</div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}; 