import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';
import { Skills } from '../pages/Skills';
import { Contact } from '../pages/Contact';
import { Login } from '../components/admin/Login';
import { AdminLayout } from '../components/admin/Layout';
import { AdminDashboard } from '../components/admin/Dashboard';
import { AdminProjects } from '../components/admin/Projects';
import { AdminSkills } from '../components/admin/Skills';
import { AdminMessages } from '../components/admin/Messages';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" />;
};

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* Rotas do admin */}
      <Route path="/admin/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="projects" element={<AdminProjects />} />
        <Route path="skills" element={<AdminSkills />} />
        <Route path="messages" element={<AdminMessages />} />
      </Route>

      {/* Rota 404 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}; 