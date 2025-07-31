from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from .models import Profile, Skill, Project, Contact


class ProfileModelTest(TestCase):
    def setUp(self):
        self.profile = Profile.objects.create(
            name="John Doe",
            title="Full Stack Developer",
            bio="Passionate developer with 5 years of experience",
            email="john@example.com"
        )

    def test_profile_creation(self):
        self.assertEqual(self.profile.name, "John Doe")
        self.assertEqual(str(self.profile), "John Doe")


class SkillModelTest(TestCase):
    def setUp(self):
        self.skill = Skill.objects.create(
            name="Python",
            category="backend",
            proficiency=90
        )

    def test_skill_creation(self):
        self.assertEqual(self.skill.name, "Python")
        self.assertEqual(str(self.skill), "Python (backend)")


class APITestCase(APITestCase):
    def setUp(self):
        self.profile = Profile.objects.create(
            name="John Doe",
            title="Full Stack Developer",
            bio="Passionate developer",
            email="john@example.com"
        )
        self.skill = Skill.objects.create(
            name="Python",
            category="backend",
            proficiency=90
        )

    def test_profile_api(self):
        url = reverse('profile')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_skills_api(self):
        url = reverse('skills')
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_contact_api(self):
        url = reverse('contact')
        data = {
            'name': 'Test User',
            'email': 'test@example.com',
            'subject': 'Test Subject',
            'message': 'Test message'
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
