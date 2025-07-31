import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    // Mock projects data - replace with API call
    const mockProjects = [
      {
        id: 1,
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform built with Django and React. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.',
        short_description: 'Full-stack e-commerce platform with modern UI/UX',
        technologies: [
          { name: 'React', category: 'frontend' },
          { name: 'Django', category: 'backend' },
          { name: 'PostgreSQL', category: 'database' },
          { name: 'Rest API', category: 'tools' }
        ],
        status: 'completed',
        featured: true,
        github_url: 'https://github.com/mouli224/ecommerce-platform',
        live_url: '',
        image: null,
        start_date: '2024-01-15',
        end_date: '2024-03-20'
      },
      {
        id: 2,
        title: '3D Model Generator',
        description: 'A collaborative task management application with real-time updates, team workspaces, file attachments, and progress tracking.',
        short_description: 'Collaborative task management with real-time features',
        technologies: [
          { name: 'React', category: 'frontend' },
          { name: 'django', category: 'backend' },
          { name: 'PostgreSQL', category: 'database' },
        ],
        status: 'completed',
        featured: true,
        github_url: 'https://github.com/mouli224/task-manager',
        live_url: '',
        image: null,
        start_date: '2023-10-01',
        end_date: '2023-12-15'
      },
      {
        id: 3,
        title: 'Augmented Reality Web App',
        description: 'An augmented reality web application that allows users to visualize 3D models in real-world environments using their device cameras.',
        short_description: 'Immersive AR experience for 3D model visualization',
        technologies: [
          { name: 'React', category: 'frontend' },
          { name: 'JavaScript', category: 'frontend' },
          { name: 'webxrAr', category: 'tools' },
        ],
        status: 'completed',
        featured: false,
        github_url: 'https://github.com/mouli224/augmented-reality-web-app',
        live_url: 'https://your-ar-demo.com',
        image: null,
        start_date: '2023-08-01',
        end_date: '2023-09-15'
      },
      {
        id: 4,
        title: 'Portfolio Website',
        description: 'This very portfolio website built with Django REST API backend and React frontend, featuring a modern design and smooth animations.',
        short_description: 'Modern portfolio website with Django & React',
        technologies: [
          { name: 'React', category: 'frontend' },
          { name: 'Django', category: 'backend' },
          { name: 'CSS3', category: 'frontend' }
        ],
        status: 'in_progress',
        featured: true,
        github_url: 'https://github.com/mouli224/portfolio',
        live_url: null,
        image: null,
        start_date: '2024-07-01',
        end_date: null
      }
    ];
    
    setProjects(mockProjects);
  }, []);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'featured', label: 'Featured' },
    { key: 'completed', label: 'Completed' },
    { key: 'in_progress', label: 'In Progress' }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.status === filter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#10b981';
      case 'in_progress': return '#f59e0b';
      case 'planned': return '#6b7280';
      default: return '#6b7280';
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case 'completed': return 'Completed';
      case 'in_progress': return 'In Progress';
      case 'planned': return 'Planned';
      default: return status;
    }
  };

  return (
    <section id="projects" className="section bg-secondary">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Here are some of the projects I've worked on recently
            </p>
          </div>

          {/* Project Filter */}
          <motion.div
            className="projects-filter"
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
            {filters.map((filterOption) => (
              <button
                key={filterOption.key}
                className={`filter-btn ${filter === filterOption.key ? 'active' : ''}`}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: '2rem',
                  background: filter === filterOption.key 
                    ? 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))'
                    : 'var(--bg-primary)',
                  color: filter === filterOption.key ? 'white' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
                onClick={() => setFilter(filterOption.key)}
              >
                {filterOption.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="projects-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  transform: 'translateY(-8px)',
                  boxShadow: 'var(--shadow-xl)'
                }}
              >
                  {/* Project Image Placeholder */}
                <div style={{
                  height: '200px',
                  background: 'linear-gradient(135deg, var(--text-primary), var(--text-secondary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--bg-primary)',
                  fontSize: '3rem',
                  position: 'relative',
                  borderRadius: '0.75rem 0.75rem 0 0'
                }}>
                  <span>🚀</span>
                  {project.featured && (
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(255, 255, 255, 0.15)',
                      backdropFilter: 'blur(10px)',
                      padding: '0.5rem 0.75rem',
                      borderRadius: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      <Star size={14} fill="currentColor" />
                      Featured
                    </div>
                  )}
                </div>

                <div style={{ padding: '1.5rem' }}>
                  {/* Project Header */}
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    marginBottom: '1rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem'
                    }}>
                      {project.title}
                    </h3>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      background: `${getStatusColor(project.status)}20`,
                      color: getStatusColor(project.status),
                      border: `1px solid ${getStatusColor(project.status)}40`
                    }}>
                      {getStatusLabel(project.status)}
                    </span>
                  </div>

                  {/* Project Description */}
                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '1.5rem',
                    fontSize: '0.875rem'
                  }}>
                    {project.short_description}
                  </p>

                  {/* Technologies */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem'
                    }}>
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          style={{
                            padding: '0.25rem 0.75rem',
                            background: 'var(--bg-secondary)',
                            color: 'var(--text-secondary)',
                            borderRadius: '1rem',
                            fontSize: '0.75rem',
                            fontWeight: '500'
                          }}
                        >
                          {tech.name}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          background: 'var(--bg-accent)',
                          color: 'var(--text-light)',
                          borderRadius: '1rem',
                          fontSize: '0.75rem',
                          fontWeight: '500'
                        }}>
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center'
                  }}>
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: 'var(--text-secondary)',
                          textDecoration: 'none',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                    
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: 'var(--text-primary)',
                          textDecoration: 'none',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}

                    <div style={{
                      marginLeft: 'auto',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      color: 'var(--text-light)',
                      fontSize: '0.75rem'
                    }}>
                      <Calendar size={12} />
                      {new Date(project.start_date).getFullYear()}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '3rem',
              color: 'var(--text-secondary)'
            }}>
              No projects found for the selected filter.
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
