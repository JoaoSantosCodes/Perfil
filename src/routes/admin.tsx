import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminLayout } from '../components/admin/Layout';
import { Login } from '../components/admin/Login';
import { Dashboard } from '../components/admin/Dashboard';
import { AdminProjects } from '../components/admin/Projects';
import { AdminSkills } from '../components/admin/Skills';
import { AdminMessages } from '../components/admin/Messages';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin/login" />;
};

export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/projects"
        element={
          <PrivateRoute>
            <AdminLayout>
              <AdminProjects />
            </AdminLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/skills"
        element={
          <PrivateRoute>
            <AdminLayout>
              <AdminSkills />
            </AdminLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <PrivateRoute>
            <AdminLayout>
              <AdminMessages />
            </AdminLayout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}; 