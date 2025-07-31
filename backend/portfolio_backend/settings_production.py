"""
Production settings for Vercel deployment
"""
import os
from .settings import *

# Override settings for production
DEBUG = False
ALLOWED_HOSTS = ['*']  # Vercel will handle the domain

# Database for production (using SQLite for simplicity)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': '/tmp/db.sqlite3',  # Vercel tmp directory
    }
}

# Static files
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'

# CORS settings for production
CORS_ALLOW_ALL_ORIGINS = True
CORS_ALLOW_CREDENTIALS = True

# Security settings
SECURE_SSL_REDIRECT = False  # Vercel handles SSL
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
