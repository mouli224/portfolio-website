import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [profile, setProfile] = useState(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    // Mock profile data - replace with API call
    setProfile({
      name: "Chandra Mouli Yellapu",
      title: "Full Stack Developer",
      bio: `I'm a passionate full stack developer with over 2 years of experience creating 
            digital solutions that make a difference. I specialize in modern web technologies 
            and love turning complex problems into simple, beautiful designs.

            When I'm not coding, you can find me exploring new technologies, contributing to 
            open source projects, or sharing my knowledge through blog posts and mentoring.`,
      location: "Banglore",
      experience_years: "2",
      projects_completed: "5+",
      technologies_mastered: "15+"
    });
  }, []);

  const stats = [
    {
      number: profile?.experience_years || "2+",
      label: "Years Experience"
    },
    {
      number: profile?.projects_completed || "5+",
      label: "Projects Completed"
    },
    {
      number: profile?.technologies_mastered || "15+",
      label: "Technologies"
    },
    {
      number: "100%",
      label: "Client Satisfaction"
    }
  ];

  if (!profile) {
    return (
      <section id="about" className="section">
        <div className="container">
          <div>Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="section bg-secondary">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Get to know more about who I am, what I do, and what skills I have
            </p>
          </div>

          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="heading-tertiary" style={{ marginBottom: '1rem' }}>
                {profile.title}
              </h3>
              
              <div style={{ 
                fontSize: '1.125rem',
                lineHeight: '1.8',
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}>
                {profile.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} style={{ marginBottom: '1rem' }}>
                    {paragraph.trim()}
                  </p>
                ))}
              </div>

              <div style={{ 
                display: 'flex', 
                gap: '2rem', 
                flexWrap: 'wrap',
                marginBottom: '2rem'
              }}>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Name:</strong>
                  <span style={{ marginLeft: '0.5rem', color: 'var(--text-secondary)' }}>
                    {profile.name}
                  </span>
                </div>
                <div>
                  <strong style={{ color: 'var(--text-primary)' }}>Location:</strong>
                  <span style={{ marginLeft: '0.5rem', color: 'var(--text-secondary)' }}>
                    {profile.location}
                  </span>
                </div>
              </div>

              <a href="#contact" className="btn btn-primary">
                Let's Work Together
              </a>
            </motion.div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="stat-card"
                    style={{
                      background: 'var(--bg-primary)',
                      padding: '2rem 1.5rem',
                      borderRadius: '1rem',
                      textAlign: 'center',
                      border: '1px solid var(--border-color)',
                      boxShadow: 'var(--shadow-sm)'
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ 
                      transform: 'translateY(-4px)',
                      boxShadow: 'var(--shadow-lg)'
                    }}
                  >
                    <div style={{
                      fontSize: '2.5rem',
                      fontWeight: '700',
                      background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      marginBottom: '0.5rem'
                    }}>
                      {stat.number}
                    </div>
                    <div style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
