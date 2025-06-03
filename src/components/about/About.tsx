import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaBrain } from 'react-icons/fa';

const About: React.FC = () => {
  const skills = [
    { name: 'Python', category: 'Programming' },
    { name: 'JavaScript', category: 'Programming' },
    { name: 'TypeScript', category: 'Programming' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Git', category: 'Tools' },
    { name: 'Power BI', category: 'Tools' },
    { name: 'Prompt Engineering', category: 'AI' },
    { name: 'Machine Learning', category: 'AI' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">About Me</h1>
        
        {/* Quick Facts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <QuickFact 
            icon={<FaMapMarkerAlt className="text-primary" size={24} />}
            title="Location"
            value="Chennai"
          />
          <QuickFact 
            icon={<FaGraduationCap className="text-primary" size={24} />}
            title="Education"
            value="B.Tech in AI & DS (2022-2026)"
          />
          <QuickFact 
            icon={<FaBrain className="text-primary" size={24} />}
            title="CGPA"
            value="8.64"
          />
        </div>

        {/* Bio */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Bio</h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            As an AI & Data Science student, I'm passionate about building innovative solutions 
            that combine cutting-edge technology with practical applications. My experience spans 
            web development, prompt engineering, and AI applications, allowing me to create 
            comprehensive solutions that address real-world challenges.
          </p>
        </div>

        {/* Skills */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
            <div className="text-primary"><FaCode /></div>
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-3 sm:p-4"
              >
                <div className="text-xs sm:text-sm text-primary mb-1">{skill.category}</div>
                <div className="font-medium text-sm sm:text-base">{skill.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface QuickFactProps {
  icon: React.ReactElement;
  title: string;
  value: string;
}

const QuickFact: React.FC<QuickFactProps> = ({ icon, title, value }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex items-start gap-3 sm:gap-4"
  >
    <div className="text-xl sm:text-2xl">
      {icon}
    </div>
    <div>
      <h3 className="text-gray-500 text-xs sm:text-sm">{title}</h3>
      <div className="font-semibold text-gray-900 text-sm sm:text-base">{value}</div>
    </div>
  </motion.div>
);

export default About; 