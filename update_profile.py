import os
import sys
import django

# Add the project directory to the Python path
sys.path.append('C:\\Users\\CHANDRA MOULI\\Desktop\\portfolio\\backend')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from portfolio.models import Profile, Skill, Project, Experience, Education
from datetime import date

# Delete existing data
Profile.objects.all().delete()
Skill.objects.all().delete()
Project.objects.all().delete()
Experience.objects.all().delete()
Education.objects.all().delete()

# Create Profile
profile = Profile.objects.create(
    name="Yellapu Chandra Mouli",
    title="Software Developer",
    bio="Passionate Software Developer with expertise in full-stack web development. Experienced in building scalable applications using modern technologies including Python, JavaScript, React, and Django. Strong problem-solving skills and commitment to delivering high-quality solutions.",
    email="yellapuchandramouli@gmail.com",
    phone="+91 9391405062",
    location="India",
    linkedin_url="https://linkedin.com/in/yellapu-chandra-mouli",
    github_url="https://github.com/chandramouli224",
    twitter_url="",
)

print(f"Created profile: {profile.name}")

# Create Skills
skills_data = [
    # Programming Languages
    {'name': 'Python', 'category': 'programming', 'proficiency': 90},
    {'name': 'JavaScript', 'category': 'programming', 'proficiency': 85},
    {'name': 'Java', 'category': 'programming', 'proficiency': 80},
    {'name': 'C++', 'category': 'programming', 'proficiency': 75},
    {'name': 'SQL', 'category': 'programming', 'proficiency': 85},
    
    # Frontend Technologies
    {'name': 'React', 'category': 'frontend', 'proficiency': 85},
    {'name': 'HTML5', 'category': 'frontend', 'proficiency': 90},
    {'name': 'CSS3', 'category': 'frontend', 'proficiency': 85},
    {'name': 'Bootstrap', 'category': 'frontend', 'proficiency': 80},
    
    # Backend Technologies
    {'name': 'Django', 'category': 'backend', 'proficiency': 85},
    {'name': 'Node.js', 'category': 'backend', 'proficiency': 80},
    {'name': 'Express.js', 'category': 'backend', 'proficiency': 75},
    {'name': 'REST API', 'category': 'backend', 'proficiency': 85},
    
    # Databases
    {'name': 'MySQL', 'category': 'database', 'proficiency': 85},
    {'name': 'PostgreSQL', 'category': 'database', 'proficiency': 80},
    {'name': 'MongoDB', 'category': 'database', 'proficiency': 75},
    
    # Tools & Technologies
    {'name': 'Git', 'category': 'tools', 'proficiency': 90},
    {'name': 'GitHub', 'category': 'tools', 'proficiency': 90},
    {'name': 'VS Code', 'category': 'tools', 'proficiency': 95},
    {'name': 'Docker', 'category': 'tools', 'proficiency': 70},
    {'name': 'Postman', 'category': 'tools', 'proficiency': 85},
]

for skill_data in skills_data:
    skill = Skill.objects.create(**skill_data)
    print(f"Created skill: {skill.name}")

# Create Projects
projects_data = [
    {
        'title': 'Portfolio Website',
        'description': 'A modern, responsive portfolio website built with Django REST API backend and React frontend. Features include dynamic content management, contact form, and professional design with smooth animations.',
        'short_description': 'Modern portfolio with Django & React',
        'status': 'completed',
        'featured': True,
        'github_url': 'https://github.com/chandramouli224/portfolio',
        'start_date': date(2024, 7, 1),
        'end_date': date(2024, 7, 31),
    },
    {
        'title': 'Web Development Projects',
        'description': 'Collection of full-stack web applications demonstrating proficiency in modern web technologies including React, Django, Node.js, and database integration.',
        'short_description': 'Full-stack web applications showcase',
        'status': 'completed',
        'featured': True,
        'github_url': 'https://github.com/chandramouli224',
        'start_date': date(2023, 6, 1),
        'end_date': date(2024, 6, 30),
    },
]

for project_data in projects_data:
    project = Project.objects.create(**project_data)
    print(f"Created project: {project.title}")

# Create Experience
experience_data = [
    {
        'company': 'Personal Projects & Learning',
        'position': 'Software Developer',
        'description': 'Actively developing personal projects and enhancing skills in full-stack web development. Focus on modern technologies including React, Django, Node.js, and database management.',
        'location': 'India',
        'start_date': date(2023, 1, 1),
        'current': True,
    },
    {
        'company': 'Academic Projects',
        'position': 'Student Developer',
        'description': 'Completed various academic and personal projects involving web development, database management, and software engineering principles.',
        'location': 'India',
        'start_date': date(2020, 6, 1),
        'end_date': date(2024, 5, 31),
        'current': False,
    }
]

for exp_data in experience_data:
    experience = Experience.objects.create(**exp_data)
    print(f"Created experience: {experience.position} at {experience.company}")

# Create Education
education_data = [
    {
        'institution': 'University/College',
        'degree': 'Bachelor of Technology',
        'field_of_study': 'Computer Science and Engineering',
        'description': 'Comprehensive education in computer science fundamentals, software engineering principles, data structures, algorithms, and modern programming technologies.',
        'grade': 'Good Academic Standing',
        'start_date': date(2020, 6, 1),
        'end_date': date(2024, 5, 31),
        'current': False,
    }
]

for edu_data in education_data:
    education = Education.objects.create(**edu_data)
    print(f"Created education: {education.degree} from {education.institution}")

print("All data created successfully!")
