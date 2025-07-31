from django.contrib import admin
from .models import Profile, Skill, Project, Experience, Education, Contact


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'email', 'created_at']
    search_fields = ['name', 'title', 'email']


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'proficiency']
    list_filter = ['category']
    search_fields = ['name']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'status', 'featured', 'start_date', 'created_at']
    list_filter = ['status', 'featured', 'technologies']
    search_fields = ['title', 'description']
    filter_horizontal = ['technologies']


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['company', 'position', 'start_date', 'end_date', 'current']
    list_filter = ['current']
    search_fields = ['company', 'position']


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ['institution', 'degree', 'field_of_study', 'start_date', 'end_date']
    search_fields = ['institution', 'degree', 'field_of_study']


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'created_at', 'responded']
    list_filter = ['responded', 'created_at']
    search_fields = ['name', 'email', 'subject']
    readonly_fields = ['created_at']
