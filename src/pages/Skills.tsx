import { useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';
import { Skill } from '../types';

export const Skills = () => {
  const { getSkills } = useApi();
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsData = await getSkills();
        setSkills(skillsData);
      } catch (error) {
        console.error('Erro ao carregar skills:', error);
      }
    };

    fetchSkills();
  }, [getSkills]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Minhas Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {skill.name}
            </h2>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500">{skill.level}%</p>
            {skill.description && (
              <p className="mt-4 text-gray-600">{skill.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}; 