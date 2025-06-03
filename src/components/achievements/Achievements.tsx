import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCertificate } from 'react-icons/fa';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: '1st Place – AI Frenzy',
      description: 'Won first place in the AI Frenzy competition for innovative AI solution development.',
      icon: <div className="text-yellow-500"><FaTrophy /></div>,
      type: 'Competition'
    },
    {
      title: '2nd Place – Promptathon',
      description: 'Secured second place in the Promptathon for creative and effective prompt engineering.',
      icon: <div className="text-gray-400"><FaMedal /></div>,
      type: 'Competition'
    },
    {
      title: 'Make-a-thon Finalist',
      description: 'Selected as a finalist in the Make-a-thon for innovative project development.',
      icon: <div className="text-primary"><FaTrophy /></div>,
      type: 'Competition'
    },
    {
      title: 'Hack-a-bot Recognition',
      description: 'Received special recognition for chatbot development in Hack-a-bot event.',
      icon: <div className="text-primary"><FaMedal /></div>,
      type: 'Recognition'
    }
  ];

  const certifications = [
    {
      title: 'Web Development',
      issuer: 'Internshala',
      score: '95%',
      icon: <div className="text-primary"><FaCertificate /></div>
    },
    {
      title: 'NextGen Indian Leaders Program',
      issuer: 'Leadership Institute',
      icon: <div className="text-primary"><FaCertificate /></div>
    },
    {
      title: 'Generative AI',
      issuer: 'Guvi/IITM RP',
      icon: <div className="text-primary"><FaCertificate /></div>
    },
    {
      title: 'MongoDB',
      issuer: 'MongoDB University',
      icon: <div className="text-primary"><FaCertificate /></div>
    },
    {
      title: 'Front-end Development',
      issuer: 'LinkedIn Learning',
      icon: <div className="text-primary"><FaCertificate /></div>
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
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Achievements</h1>

        {/* Competitions & Recognition */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Competitions & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard key={achievement.title} achievement={achievement} index={index} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.title} certification={cert} index={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface AchievementType {
  title: string;
  description: string;
  icon: React.ReactNode;
  type: string;
}

const AchievementCard: React.FC<{ achievement: AchievementType; index: number }> = ({ achievement, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-md p-6"
  >
    <div className="flex items-start gap-4">
      <div className="text-3xl flex-shrink-0">
        {achievement.icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
        <p className="text-gray-600 mb-2">{achievement.description}</p>
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
          {achievement.type}
        </span>
      </div>
    </div>
  </motion.div>
);

interface CertificationType {
  title: string;
  issuer: string;
  score?: string;
  icon: React.ReactNode;
}

const CertificationCard: React.FC<{ certification: CertificationType; index: number }> = ({ certification, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white rounded-xl shadow-md p-6"
  >
    <div className="flex items-start gap-4">
      <div className="text-2xl">
        {certification.icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{certification.title}</h3>
        <p className="text-gray-600 text-sm">{certification.issuer}</p>
        {certification.score && (
          <p className="text-primary font-medium text-sm mt-1">Score: {certification.score}</p>
        )}
      </div>
    </div>
  </motion.div>
);

export default Achievements; 