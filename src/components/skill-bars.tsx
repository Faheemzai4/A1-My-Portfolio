"use client";

import React, { useEffect, useState } from "react";

const SkillBars: React.FC = () => {
  const skills = [
    { name: "React/Next.js", level: 90, color: "bg-blue-500" },
    { name: "Angular", level: 80, color: "bg-purple-500" },
    { name: "JavaScript/TypeScript", level: 75, color: "bg-yellow-500" },
    { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
    { name: "Bootstrap/Material UI", level: 85, color: "bg-green-500" },
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="animate-fade-in-left text-white space-y-6">
      <h2 className="text-red-800 text-2xl font-bold mb-4 text-center md:text-left">
        Frontend
      </h2>

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="font-medium">{skill.level}%</span>
            </div>
            <div className="w-full h-4 bg-gray-200 rounded-lg overflow-hidden">
              <div
                className={`${skill.color} h-4 rounded-lg transition-all duration-1000 ease-out brightness-animation`}
                style={{ width: loaded ? `${skill.level}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillBars;
