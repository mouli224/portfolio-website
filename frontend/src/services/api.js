import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Mock data for demonstration purposes
const mockData = {
  profile: [{
    name: "Yellapu Chandra Mouli",
    title: "Software Developer",
    bio: "Passionate Software Developer with expertise in full-stack web development. Experienced in building scalable applications using modern technologies including Python, JavaScript, React, and Django. Strong problem-solving skills and commitment to delivering high-quality solutions.",
    email: "yellapuchandramouli@gmail.com",
    phone: "+91 9391405062",
    location: "India",
    linkedin_url: "https://linkedin.com/in/yellapu-chandra-mouli",
    github_url: "https://github.com/chandramouli224",
    twitter_url: "",
  }],
  skills: [
    // Programming Languages
    { name: 'Python', category: 'programming', proficiency: 90, icon: '🐍' },
    { name: 'JavaScript', category: 'programming', proficiency: 85, icon: '🟨' },
    { name: 'Java', category: 'programming', proficiency: 80, icon: '☕' },
    { name: 'C++', category: 'programming', proficiency: 75, icon: '⚡' },
    { name: 'SQL', category: 'programming', proficiency: 85, icon: '🗃️' },
    
    // Frontend Technologies
    { name: 'React', category: 'frontend', proficiency: 85, icon: '⚛️' },
    { name: 'HTML5', category: 'frontend', proficiency: 90, icon: '🌐' },
    { name: 'CSS3', category: 'frontend', proficiency: 85, icon: '🎨' },
    { name: 'Bootstrap', category: 'frontend', proficiency: 80, icon: '�' },
    
    // Backend Technologies
    { name: 'Django', category: 'backend', proficiency: 85, icon: '🎸' },
    { name: 'Node.js', category: 'backend', proficiency: 80, icon: '�' },
    { name: 'Express.js', category: 'backend', proficiency: 75, icon: '🚀' },
    { name: 'REST API', category: 'backend', proficiency: 85, icon: '🔗' },
    
    // Databases
    { name: 'MySQL', category: 'database', proficiency: 85, icon: '�' },
    { name: 'PostgreSQL', category: 'database', proficiency: 80, icon: '🐘' },
    { name: 'MongoDB', category: 'database', proficiency: 75, icon: '🍃' },
    
    // Tools
    { name: 'Git', category: 'tools', proficiency: 90, icon: '📝' },
    { name: 'GitHub', category: 'tools', proficiency: 90, icon: '🐙' },
    { name: 'VS Code', category: 'tools', proficiency: 95, icon: '💻' },
    { name: 'Docker', category: 'tools', proficiency: 70, icon: '🐳' },
    { name: 'Postman', category: 'tools', proficiency: 85, icon: '📮' },
  ],
  projects: [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Django REST API backend and React frontend. Features include dynamic content management, contact form, and professional design with smooth animations.',
      short_description: 'Modern portfolio with Django & React',
      technologies: [
        { name: 'React', category: 'frontend' },
        { name: 'Django', category: 'backend' },
        { name: 'Python', category: 'programming' },
        { name: 'JavaScript', category: 'programming' }
      ],
      status: 'completed',
      featured: true,
      github_url: 'https://github.com/chandramouli224/portfolio',
      start_date: '2024-07-01',
      end_date: '2024-07-31'
    },
    {
      id: 2,
      title: 'Web Development Projects',
      description: 'Collection of full-stack web applications demonstrating proficiency in modern web technologies including React, Django, Node.js, and database integration.',
      short_description: 'Full-stack web applications showcase',
      technologies: [
        { name: 'React', category: 'frontend' },
        { name: 'Node.js', category: 'backend' },
        { name: 'MySQL', category: 'database' }
      ],
      status: 'completed',
      featured: true,
      github_url: 'https://github.com/chandramouli224',
      start_date: '2023-06-01',
      end_date: '2024-06-30'
    }
  ],
  experience: [
    {
      id: 1,
      company: 'Personal Projects & Learning',
      position: 'Software Developer',
      description: 'Actively developing personal projects and enhancing skills in full-stack web development. Focus on modern technologies including React, Django, Node.js, and database management.',
      location: 'India',
      start_date: '2023-01-01',
      current: true
    },
    {
      id: 2,
      company: 'Academic Projects',
      position: 'Student Developer',
      description: 'Completed various academic and personal projects involving web development, database management, and software engineering principles.',
      location: 'India',
      start_date: '2020-06-01',
      end_date: '2024-05-31',
      current: false
    }
  ],
  education: [
    {
      id: 1,
      institution: 'University/College',
      degree: 'Bachelor of Technology',
      field_of_study: 'Computer Science and Engineering',
      description: 'Comprehensive education in computer science fundamentals, software engineering principles, data structures, algorithms, and modern programming technologies.',
      grade: 'Good Academic Standing',
      start_date: '2020-06-01',
      end_date: '2024-05-31'
    }
  ]
};

// API endpoints with fallback to mock data
export const portfolioAPI = {
  // Profile
  getProfile: () => {
    return api.get('/profile/').catch(() => ({ data: mockData.profile }));
  },
  
  // Skills
  getSkills: (category = null) => {
    const params = category ? { category } : {};
    return api.get('/skills/', { params }).catch(() => ({ 
      data: category ? mockData.skills.filter(s => s.category === category) : mockData.skills 
    }));
  },
  
  // Projects
  getProjects: (featured = null) => {
    const params = featured ? { featured: 'true' } : {};
    return api.get('/projects/', { params }).catch(() => ({ 
      data: featured ? mockData.projects.filter(p => p.featured) : mockData.projects 
    }));
  },
  
  getProject: (id) => {
    return api.get(`/projects/${id}/`).catch(() => ({ 
      data: mockData.projects.find(p => p.id === parseInt(id)) 
    }));
  },
  
  // Experience
  getExperience: () => {
    return api.get('/experience/').catch(() => ({ data: mockData.experience }));
  },
  
  // Education
  getEducation: () => {
    return api.get('/education/').catch(() => ({ data: mockData.education }));
  },
  
  // Contact
  submitContact: (data) => {
    return api.post('/contact/', data).catch(() => ({ 
      data: { message: 'Thank you for your message! Please connect the backend to enable contact form.' } 
    }));
  },
  
  // API Overview
  getApiOverview: () => {
    return api.get('/').catch(() => ({ data: { message: 'Portfolio API - Connect Django backend for full functionality' } }));
  },
};

export default api;
