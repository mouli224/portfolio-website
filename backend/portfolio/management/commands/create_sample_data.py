from django.core.management.base import BaseCommand
from portfolio.models import Profile, Skill, Project, Experience, Education
from datetime import date


class Command(BaseCommand):
    help = 'Create sample data for the portfolio'

    def handle(self, *args, **options):
        # Create Profile
        profile, created = Profile.objects.get_or_create(
            name="Yellapu Chandra Mouli",
            defaults={
                'title': "Software Developer",
                'bio': "Passionate Software Developer with 2 years experience in full-stack web development. Experienced in building scalable applications using modern technologies including Python, JavaScript, React, and Django. Strong problem-solving skills and commitment to delivering high-quality solutions.",
                'email': "yellapuchandramouli797@gmail.com",
                'phone': "+91 7013938180",
                'location': "India",
                'linkedin_url': "https://linkedin.com/in/yellapu-chandra-mouli",
                'github_url': "https://github.com/chandramouli224",
            }
        )
        
        if created:
            self.stdout.write(self.style.SUCCESS('Profile created successfully'))
        else:
            self.stdout.write(self.style.WARNING('Profile already exists'))

        # Create Skills
        skills_data = [
            # Programming Languages
            {'name': 'Python', 'category': 'programming', 'proficiency': 90},
            {'name': 'JavaScript', 'category': 'programming', 'proficiency': 85},
            {'name': 'Java', 'category': 'programming', 'proficiency': 80},
            {'name': 'SQL', 'category': 'programming', 'proficiency': 85},
            
            # Frontend Technologies
            {'name': 'React', 'category': 'frontend', 'proficiency': 85},
            {'name': 'HTML5', 'category': 'frontend', 'proficiency': 90},
            {'name': 'CSS3', 'category': 'frontend', 'proficiency': 85},
            {'name': 'Bootstrap', 'category': 'frontend', 'proficiency': 80},
            
            # Backend Technologies
            {'name': 'Django', 'category': 'backend', 'proficiency': 85},
            {'name': 'REST API', 'category': 'backend', 'proficiency': 85},
            
            # Databases
            {'name': 'Sqlite3', 'category': 'database', 'proficiency': 85},
            {'name': 'PostgreSQL', 'category': 'database', 'proficiency': 80},
            
            # Tools & Technologies
            {'name': 'Git', 'category': 'tools', 'proficiency': 90},
            {'name': 'GitHub', 'category': 'tools', 'proficiency': 90},
            {'name': 'VS Code', 'category': 'tools', 'proficiency': 95},
            {'name': 'Docker', 'category': 'tools', 'proficiency': 70},
        ]

        for skill_data in skills_data:
            skill, created = Skill.objects.get_or_create(
                name=skill_data['name'],
                defaults=skill_data
            )
            if created:
                self.stdout.write(f"Created skill: {skill.name}")

        # Create Projects
        projects_data = [
            {
                'title': '3D Web Applications',
                'description': 'Collection of 3D web applications demonstrating proficiency in modern web technologies including React, Django, Node.js, and database integration.',
                'short_description': '3D web applications showcase',
                'status': 'completed',
                'featured': True,
                'github_url': '',
                'start_date': date(2023, 6, 1),
                'end_date': date(2024, 6, 30),
            },
            {
                'title': 'Augmented Reality Project',
                'description': 'Collection of Augmented Reality web applications demonstrating proficiency in modern web technologies including React, Django, Node.js, and database integration.',
                'short_description': 'Augmented Reality web applications showcase',
                'status': 'completed',
                'featured': True,
                'github_url': '',
                'start_date': date(2023, 6, 1),
                'end_date': date(2024, 6, 30),
            },
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
            project, created = Project.objects.get_or_create(
                title=project_data['title'],
                defaults=project_data
            )
            if created:
                self.stdout.write(f"Created project: {project.title}")
                # Add some technologies to the project
                frontend_skills = Skill.objects.filter(category='frontend')[:3]
                backend_skills = Skill.objects.filter(category='backend')[:2]
                project.technologies.set(list(frontend_skills) + list(backend_skills))

        # Create Experience
        experience_data = [
            {
                'company': 'Tata Consultancy Services',
                'position': 'Software Developer',
                'description': 'Actively developing personal projects and enhancing skills in full-stack web development. Focus on modern technologies including React, Django, Node.js, and database management. Building portfolio projects to demonstrate technical capabilities.',
                'location': 'India',
                'start_date': date(2023, 10, 1),
                'current': True,
            },
            {
                'company': 'Keka Technologies',
                'position': 'Intern',
                'description': 'Completed various academic and personal projects involving web development, database management, and software engineering principles. Gained hands-on experience with Python, JavaScript, Java, and modern development tools.',
                'location': 'India',
                'start_date': date(2023, 1, 1),
                'end_date': date(2023, 5, 31),
                'current': False,
            }
        ]

        for exp_data in experience_data:
            experience, created = Experience.objects.get_or_create(
                company=exp_data['company'],
                position=exp_data['position'],
                defaults=exp_data
            )
            if created:
                self.stdout.write(f"Created experience: {experience.position} at {experience.company}")

        # Create Education
        education_data = [
            {
                'institution': 'MVGR College of Engineering',
                'degree': 'Bachelor of Technology',
                'field_of_study': 'Mechanical Engineering',
                'description': 'Comprehensive education in mechanical engineering principles, design, and analysis. Focus on thermodynamics, fluid mechanics, and materials science.',
                'grade': 'Good Academic Standing',
                'start_date': date(2019, 6, 1),
                'end_date': date(2023, 5, 31),
                'current': False,
            }
        ]

        for edu_data in education_data:
            education, created = Education.objects.get_or_create(
                institution=edu_data['institution'],
                degree=edu_data['degree'],
                defaults=edu_data
            )
            if created:
                self.stdout.write(f"Created education: {education.degree} from {education.institution}")

        self.stdout.write(self.style.SUCCESS('Sample data created successfully!'))
