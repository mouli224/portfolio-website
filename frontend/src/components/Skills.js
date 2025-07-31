import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    // Mock skills data - replace with API call
    const mockSkills = [
      // Frontend
      { name: 'React', category: 'frontend', proficiency: 90, icon: '⚛️' },
      { name: 'JavaScript', category: 'frontend', proficiency: 85, icon: '🟨' },
      { name: 'HTML5', category: 'frontend', proficiency: 95, icon: '🟧' },
      { name: 'CSS3', category: 'frontend', proficiency: 90, icon: '🎨' },
      { name: 'Tailwind CSS', category: 'frontend', proficiency: 85, icon: '💨' },
      
      // Backend
      { name: 'Django', category: 'backend', proficiency: 85, icon: '🐍' },
      { name: 'Python', category: 'backend', proficiency: 90, icon: '🐍' },
      { name: 'Node.js', category: 'backend', proficiency: 80, icon: '🟢' },
      { name: 'REST API', category: 'backend', proficiency: 85, icon: '🔌' },
      
      // Database
      { name: 'PostgreSQL', category: 'database', proficiency: 80, icon: '🐘' },
      { name: 'SQLite', category: 'database', proficiency: 85, icon: '💾' },
      
      // Tools
      { name: 'Git', category: 'tools', proficiency: 90, icon: '📝' },
      { name: 'VS Code', category: 'tools', proficiency: 95, icon: '💻' },
      { name: 'Docker', category: 'tools', proficiency: 70, icon: '🐳' },
      { name: 'Figma', category: 'tools', proficiency: 75, icon: '🎨' }
    ];
    
    setSkills(mockSkills);
  }, []);

  const categories = [
    { key: 'all', label: 'All Skills' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'database', label: 'Database' },
    { key: 'tools', label: 'Tools' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getSkillLevel = (proficiency) => {
    if (proficiency >= 90) return 'Expert';
    if (proficiency >= 75) return 'Advanced';
    if (proficiency >= 60) return 'Intermediate';
    return 'Beginner';
  };

  const getSkillColor = (proficiency) => {
    if (proficiency >= 90) return '#10b981'; // Green
    if (proficiency >= 75) return '#3b82f6'; // Blue
    if (proficiency >= 60) return '#f59e0b'; // Amber
    return '#ef4444'; // Red
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">
              Here are the technologies and tools I work with
            </p>
          </div>

          {/* Category Filter */}
          <motion.div
            className="skills-filter"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.key}
                className={`filter-btn ${activeCategory === category.key ? 'active' : ''}`}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: '2rem',
                  background: activeCategory === category.key 
                    ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'
                    : 'var(--bg-primary)',
                  color: activeCategory === category.key ? 'white' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
                onClick={() => setActiveCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="skills-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card"
                style={{
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.3s ease'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  transform: 'translateY(-4px)',
                  boxShadow: 'var(--shadow-lg)'
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <span style={{ fontSize: '2rem' }}>{skill.icon}</span>
                  <div>
                    <h3 style={{ 
                      fontSize: '1.125rem', 
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.25rem'
                    }}>
                      {skill.name}
                    </h3>
                    <span style={{
                      fontSize: '0.875rem',
                      color: getSkillColor(skill.proficiency),
                      fontWeight: '500'
                    }}>
                      {getSkillLevel(skill.proficiency)}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: 'var(--bg-secondary)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}>
                  <motion.div
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${getSkillColor(skill.proficiency)}, ${getSkillColor(skill.proficiency)}aa)`,
                      borderRadius: '4px'
                    }}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.proficiency}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                  />
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-light)',
                    textTransform: 'capitalize'
                  }}>
                    {skill.category}
                  </span>
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: 'var(--text-secondary)'
                  }}>
                    {skill.proficiency}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
