import { useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';
import { Project, Skill } from '../types';

export const Home = () => {
  const { getProjects, getSkills } = useApi();
  const [projects, setProjects] = useState<Project[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, skillsData] = await Promise.all([
          getProjects(),
          getSkills(),
        ]);
        setProjects(projectsData);
        setSkills(skillsData);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    fetchData();
  }, [getProjects, getSkills]);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Bem-vindo ao meu Portfolio
        </h1>
        <p className="text-lg text-gray-600">
          Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e
          experiências digitais excepcionais.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Projetos Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Minhas Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-lg shadow-md p-4 text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}; 