from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from django.conf import settings
from .models import Profile, Skill, Project, Experience, Education, Contact
from .serializers import (
    ProfileSerializer, SkillSerializer, ProjectSerializer,
    ExperienceSerializer, EducationSerializer, ContactSerializer
)


class ProfileListView(generics.ListAPIView):
    """API view to retrieve profile information"""
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class SkillListView(generics.ListAPIView):
    """API view to retrieve all skills grouped by category"""
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

    def get_queryset(self):
        category = self.request.query_params.get('category', None)
        if category is not None:
            return Skill.objects.filter(category=category)
        return Skill.objects.all()


class ProjectListView(generics.ListAPIView):
    """API view to retrieve all projects"""
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_queryset(self):
        featured = self.request.query_params.get('featured', None)
        if featured is not None:
            return Project.objects.filter(featured=True)
        return Project.objects.all()


class ProjectDetailView(generics.RetrieveAPIView):
    """API view to retrieve a single project"""
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ExperienceListView(generics.ListAPIView):
    """API view to retrieve work experience"""
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class EducationListView(generics.ListAPIView):
    """API view to retrieve education information"""
    queryset = Education.objects.all()
    serializer_class = EducationSerializer


class ContactCreateView(generics.CreateAPIView):
    """API view to handle contact form submissions"""
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            contact = serializer.save()
            
            # Optional: Send email notification
            try:
                send_mail(
                    subject=f"Portfolio Contact: {contact.subject}",
                    message=f"Name: {contact.name}\nEmail: {contact.email}\n\nMessage:\n{contact.message}",
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[settings.CONTACT_EMAIL],
                    fail_silently=True,
                )
            except:
                pass  # Email sending is optional
            
            return Response(
                {"message": "Thank you for your message! I'll get back to you soon."},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def api_overview(request):
    """API overview with available endpoints"""
    api_urls = {
        'Profile': '/api/profile/',
        'Skills': '/api/skills/',
        'Skills by category': '/api/skills/?category=frontend',
        'Projects': '/api/projects/',
        'Featured Projects': '/api/projects/?featured=true',
        'Project Detail': '/api/projects/{id}/',
        'Experience': '/api/experience/',
        'Education': '/api/education/',
        'Contact': '/api/contact/',
    }
    return Response(api_urls)
