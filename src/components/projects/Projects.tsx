import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'GreenShift',
      description: 'A comprehensive platform promoting carbon neutrality through innovative tracking and optimization solutions.',
      image: '/projects/greenshift.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Machine Learning'],
      github: '#',
      demo: '#'
    },
    {
      title: 'VCatalyst',
      description: 'Startup accelerator platform connecting entrepreneurs with resources and mentorship opportunities.',
      image: '/projects/vcatalyst.jpg',
      technologies: ['React', 'TypeScript', 'Firebase'],
      github: '#',
      demo: '#'
    },
    {
      title: 'LearnX',
      description: 'Interactive finance learning platform with personalized learning paths and real-time market data.',
      image: '/projects/learnx.jpg',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      title: 'BooksForYou',
      description: 'Personalized book recommendation platform with clean, user-friendly interface.',
      image: '/projects/booksforyou.jpg',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Sugarcane AI Promptathon',
      description: 'Advanced chatbot creation project leveraging Sugarcane AI technology.',
      image: '/projects/sugarcane.jpg',
      technologies: ['Python', 'NLP', 'Machine Learning'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Travel Guide AI App',
      description: 'AI-powered travel recommendation system built during OpenWeaver hackathon.',
      image: '/projects/travel.jpg',
      technologies: ['React Native', 'Node.js', 'OpenAI'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Certificate Generator',
      description: 'Automated certificate generation system using RPA technology.',
      image: '/projects/certificate.jpg',
      technologies: ['UIPath', 'Python'],
      github: '#',
      demo: '#'
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

interface ProjectType {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
}

const ProjectCard: React.FC<{ project: ProjectType; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-md overflow-hidden"
  >
    <div className="h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map(tech => (
          <span
            key={tech}
            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

export default Projects; 