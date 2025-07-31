import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/mouli224',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/mouli224',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:yellapuchandramouli797@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-color)',
      paddingTop: '3rem',
      paddingBottom: '2rem'
    }}>
      <div className="container">
        <div className="grid grid-3" style={{ marginBottom: '2rem', gap: '2rem' }}>
          {/* Brand Section */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--primary-color)',
              marginBottom: '1rem'
            }}>
              Portfolio
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Full Stack Developer passionate about creating amazing web experiences 
              with modern technologies.
            </p>
            
            {/* Social Links */}
            <div style={{
              display: 'flex',
              gap: '1rem'
            }}>
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '0.5rem',
                      background: 'var(--bg-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'var(--primary-color)';
                      e.target.style.color = 'white';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'var(--bg-secondary)';
                      e.target.style.color = 'var(--text-secondary)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Quick Links
            </h4>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = 'var(--primary-color)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}>
              Get In Touch
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.875rem',
                lineHeight: '1.5'
              }}>
                Always interested in new opportunities and collaborations.
              </p>
              <a
                href="mailto:your.email@example.com"
                style={{
                  color: 'var(--primary-color)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}
              >
                yellapuchandramouli797@gmail.com
              </a>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.875rem'
              }}>
                Bangalore, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{
            color: 'var(--text-light)',
            fontSize: '0.875rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            © {currentYear} Portfolio. Made with{' '}
            <Heart 
              size={16} 
              style={{ color: '#ef4444' }} 
              fill="currentColor"
            />{' '}
            using Django & React
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            fontSize: '0.875rem'
          }}>
            <a
              href="#privacy"
              style={{
                color: 'var(--text-light)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--primary-color)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-light)';
              }}
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              style={{
                color: 'var(--text-light)',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--primary-color)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'var(--text-light)';
              }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
