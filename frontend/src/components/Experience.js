import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, ExternalLink, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [activeTab, setActiveTab] = useState('experience');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    // Mock experience data - replace with API call
    const mockExperience = [
      {
        id: 1,
        company: 'Tata Consultancy Services',
        position: 'Senior Full Stack Developer',
        description: 'Led development of multiple web applications using React and Django. Mentored junior developers and collaborated with cross-functional teams to deliver high-quality software solutions.',
        location: 'Bangalore, India',
        company_url: 'https://www.tcs.com',
        start_date: '2025-04-15',
        end_date: null,
        current: true
      },
      {
        id: 2,
        company: 'Tata Consultancy Services',
        position: 'Full Stack Developer',
        description: 'Developed and maintained Full Stack web Applications. Implemented CI/CD pipelines and improved application performance by 40%.',
        location: 'Bangalore, India',
        company_url: 'https://www.tcs.com',
        start_date: '2023-12-31',
        end_date: '2025-04-01',
        current: false
      },
      {
        id: 3,
        company: 'Keka Technologies',
        position: 'Product Specialist',
        description: 'Responsible for product demonstrations and client training. Collaborated with cross-functional teams to enhance product features.',
        location: 'Hyderabad, India',
        company_url: 'https://www.keka.com',
        start_date: '2023-01-12',
        end_date: '2023-06-30',
        current: false
      }
    ];

    // Mock education data - replace with API call
    const mockEducation = [
      {
        id: 1,
        institution: 'MVGR College of Engineering',
        degree: 'Bachelor of Technology',
        field_of_study: 'Mechanical Engineering',
        description: 'Focused on Mechanical, software engineering, data structures, algorithms, and web development. Graduated with honors.',
        grade: '3.8 GPA',
        start_date: '2019-06-01',
        end_date: '2023-05-31',
        current: false
      },
    ];

    setExperience(mockExperience);
    setEducation(mockEducation);
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffTime = Math.abs(end - start);
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44));
    
    if (diffMonths < 12) {
      return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
    } else {
      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;
      return `${years} year${years > 1 ? 's' : ''}${months > 0 ? ` ${months} month${months > 1 ? 's' : ''}` : ''}`;
    }
  };

  const tabs = [
    { key: 'experience', label: 'Experience', icon: Briefcase },
    { key: 'education', label: 'Education', icon: GraduationCap }
  ];

  const currentData = activeTab === 'experience' ? experience : education;

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <h2 className="section-title">Experience & Education</h2>
            <p className="section-subtitle">
              My professional journey and educational background
            </p>
          </div>

          {/* Tab Navigation */}
          <motion.div
            className="tab-navigation"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.key}
                  className={`tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '1rem 2rem',
                    border: '1px solid var(--border-color)',
                    borderRadius: '0.75rem',
                    background: activeTab === tab.key 
                      ? 'linear-gradient(135deg, var(--text-primary), var(--text-secondary))'
                      : 'var(--bg-secondary)',
                    color: activeTab === tab.key ? 'var(--bg-primary)' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '1rem',
                    fontWeight: '500'
                  }}
                  onClick={() => setActiveTab(tab.key)}
                >
                  <IconComponent size={20} />
                  {tab.label}
                </button>
              );
            })}
          </motion.div>

          {/* Timeline */}
          <div className="timeline" style={{ 
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '2rem',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(to bottom, var(--text-primary), var(--text-secondary))',
              zIndex: 1
            }} />

            {currentData.map((item, index) => (
              <motion.div
                key={item.id}
                className="timeline-item"
                style={{
                  position: 'relative',
                  paddingLeft: '5rem',
                  paddingBottom: '3rem'
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: '1.25rem',
                  top: '1rem',
                  width: '1.5rem',
                  height: '1.5rem',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--text-primary), var(--text-secondary))',
                  border: '4px solid var(--bg-primary)',
                  zIndex: 2,
                  boxShadow: '0 0 0 4px var(--border-color)'
                }} />

                {/* Content Card */}
                <motion.div
                  className="timeline-content"
                  style={{
                    background: 'var(--bg-primary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '1rem',
                    padding: '2rem',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.3s ease'
                  }}
                  whileHover={{ 
                    transform: 'translateY(-4px)',
                    boxShadow: 'var(--shadow-lg)'
                  }}
                >
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem'
                      }}>
                        {activeTab === 'experience' ? item.position : item.degree}
                      </h3>
                      
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        <span style={{
                          fontSize: '1rem',
                          fontWeight: '500',
                          color: 'var(--text-primary)'
                        }}>
                          {activeTab === 'experience' ? item.company : item.institution}
                        </span>
                        {item.company_url && (
                          <a
                            href={item.company_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--text-light)' }}
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>

                      {activeTab === 'education' && item.field_of_study && (
                        <p style={{
                          color: 'var(--text-secondary)',
                          fontSize: '0.875rem',
                          marginBottom: '0.5rem'
                        }}>
                          {item.field_of_study}
                        </p>
                      )}

                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        fontSize: '0.875rem',
                        color: 'var(--text-light)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Calendar size={14} />
                          {formatDate(item.start_date)} - {formatDate(item.end_date)}
                        </div>
                        
                        {item.location && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <MapPin size={14} />
                            {item.location}
                          </div>
                        )}
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      gap: '0.5rem'
                    }}>
                      <span style={{
                        padding: '0.25rem 0.75rem',
                        borderRadius: '1rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        background: item.current ? '#10b98120' : 'var(--bg-secondary)',
                        color: item.current ? '#10b981' : 'var(--text-secondary)',
                        border: item.current ? '1px solid #10b98140' : '1px solid var(--border-color)'
                      }}>
                        {item.current ? 'Current' : calculateDuration(item.start_date, item.end_date)}
                      </span>

                      {item.grade && (
                        <span style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-light)'
                        }}>
                          {item.grade}
                        </span>
                      )}
                    </div>
                  </div>

                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    fontSize: '0.875rem'
                  }}>
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
