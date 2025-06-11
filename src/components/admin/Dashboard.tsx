import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';

export const AdminDashboard = () => {
  const { getProjects, getSkills, getMessages } = useApi();
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    messages: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [projects, skills, messages] = await Promise.all([
          getProjects(),
          getSkills(),
          getMessages(),
        ]);

        setStats({
          projects: projects.length,
          skills: skills.length,
          messages: messages.length,
        });
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700">Projetos</h3>
        <p className="text-3xl font-bold text-blue-600">{stats.projects}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
        <p className="text-3xl font-bold text-green-600">{stats.skills}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-gray-700">Mensagens</h3>
        <p className="text-3xl font-bold text-purple-600">{stats.messages}</p>
      </div>
    </div>
  );
}; 