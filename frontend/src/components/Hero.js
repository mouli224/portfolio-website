import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { portfolioAPI } from '../services/api';

const Hero = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await portfolioAPI.getProfile();
        if (response.data && response.data.length > 0) {
          setProfile(response.data[0]);
        } else {
          // Fallback data if no profile exists
          setProfile({
            name: "Your Name",
            title: "Full Stack Developer",
            bio: "Passionate developer creating amazing web experiences with modern technologies",
            email: "yellapuchandramouli797@gmail.com",
            github_url: "https://github.com/mouli224",
            linkedin_url: "https://linkedin.com/in/mouli224",
            resume_url: "/resume.pdf"
          });
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        // Fallback data on error
        setProfile({
          name: "Your Name",
          title: "Full Stack Developer",
          bio: "Passionate developer creating amazing web experiences with modern technologies",
          email: "yellapuchandramouli797@gmail.com",
          github_url: "https://github.com/mouli224",
          linkedin_url: "https://linkedin.com/in/mouli224",
          resume_url: "/resume.pdf"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                height: '300px',
                fontSize: '1.125rem',
                color: 'var(--text-secondary)'
              }}>
                Loading...
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!profile) {
    return (
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div>Loading...</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div 
          ref={ref}
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-text">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm {profile.name}
            </motion.h1>
            
            <motion.p 
              className="hero-subtitle"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {profile.bio}
            </motion.p>

            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#contact" className="btn btn-primary">
                <Mail size={20} />
                Get In Touch
              </a>
              
              {profile.resume_url && (
                <a 
                  href={profile.resume_url} 
                  className="btn btn-outline"
                  download
                >
                  <Download size={20} />
                  Download Resume
                </a>
              )}
            </motion.div>

            <motion.div 
              className="social-links"
              style={{ 
                display: 'flex', 
                gap: '1rem', 
                marginTop: '2rem',
                justifyContent: 'flex-start'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {profile.github_url && (
                <a 
                  href={profile.github_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{
                    padding: '0.75rem',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Github size={20} />
                </a>
              )}
              
              {profile.linkedin_url && (
                <a 
                  href={profile.linkedin_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{
                    padding: '0.75rem',
                    borderRadius: '50%',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <Linkedin size={20} />
                </a>
              )}
            </motion.div>
          </div>

          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="hero-avatar">
              <span>{profile.name.charAt(0)}</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          onClick={scrollToNext}
          style={{ cursor: 'pointer' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
