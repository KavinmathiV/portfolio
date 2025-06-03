import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaBuilding } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'C1X Inc.',
      period: 'Ongoing',
      description: [
        'Developed and optimized responsive web applications using React.js, CSS, JavaScript, and TypeScript',
        'Utilized Power BI to design interactive dashboards and deliver real-time business insights',
        'Managed codebase and collaboration using Git and GitHub, ensuring smooth version control'
      ],
      skills: ['React.js', 'TypeScript', 'Power BI', 'Git']
    },
    {
      title: 'Prompt Engineering Intern',
      company: 'Ozibook',
      period: 'July – September 2024',
      description: [
        'Designed and tested creative prompts to generate impactful content for social media marketing',
        'Collaborated with two client brands to enhance their LinkedIn presence, leading to increased engagement',
        'Specialized in tailoring AI-generated content to align with brand voice and campaign goals'
      ],
      skills: ['Prompt Engineering', 'Content Creation', 'Social Media', 'AI Tools']
    },
    {
      title: 'Web Designing Intern',
      company: 'Conclar',
      period: 'October 2024',
      description: [
        'Built BooksForYou, a clean, responsive web platform connecting readers to curated book collections',
        'Implemented search and filter features using HTML, CSS, and minimal JavaScript',
        'Focused on user-friendly UX design, ensuring a smooth and intuitive browsing experience'
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'UX Design']
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Experience</h1>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.title} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface ExperienceType {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

const ExperienceCard: React.FC<{ experience: ExperienceType; index: number }> = ({ experience, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.2 }}
    className="bg-white rounded-xl shadow-md p-6"
  >
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
          <div className="text-primary"><FaBriefcase /></div>
          {experience.title}
        </h2>
        <div className="flex items-center gap-2 text-gray-600 mt-2">
          <div><FaBuilding /></div>
          {experience.company}
        </div>
      </div>
      <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
        <div><FaCalendar /></div>
        {experience.period}
      </div>
    </div>

    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-2">
      {experience.description.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>

    <div className="flex flex-wrap gap-2">
      {experience.skills.map(skill => (
        <span
          key={skill}
          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default Experience; 