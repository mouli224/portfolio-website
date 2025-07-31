from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_overview, name='api_overview'),
    path('profile/', views.ProfileListView.as_view(), name='profile'),
    path('skills/', views.SkillListView.as_view(), name='skills'),
    path('projects/', views.ProjectListView.as_view(), name='projects'),
    path('projects/<int:pk>/', views.ProjectDetailView.as_view(), name='project_detail'),
    path('experience/', views.ExperienceListView.as_view(), name='experience'),
    path('education/', views.EducationListView.as_view(), name='education'),
    path('contact/', views.ContactCreateView.as_view(), name='contact'),
]
