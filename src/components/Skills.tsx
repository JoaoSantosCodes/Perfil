import { useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';
import { Skill } from '../types';
import { Loading } from './Loading';

export function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const { loading, error, getSkills } = useApi();

  useEffect(() => {
    const fetchSkills = async () => {
      const data = await getSkills();
      if (data) {
        setSkills(data);
      }
    };

    fetchSkills();
  }, [getSkills]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const categories = Array.from(new Set(skills.map((skill) => skill.category)));

  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <div key={category}>
          <h3 className="text-2xl font-semibold mb-4">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills
              .filter((skill) => skill.category === category)
              .map((skill) => (
                <div
                  key={skill.id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {skill.icon && (
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-8 h-8"
                      />
                    )}
                    <h4 className="text-lg font-medium">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
} 