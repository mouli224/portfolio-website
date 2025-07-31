# Portfolio Website

A modern, responsive portfolio website built with Django REST Framework backend and React frontend.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Interactive**: Smooth scrolling, hover effects, and animations
- **Contact Form**: Functional contact form with email integration
- **Admin Panel**: Django admin for content management
- **API-Driven**: RESTful API architecture
- **SEO Friendly**: Optimized for search engines

## 🛠️ Tech Stack

### Backend
- **Django 5.2.4**: Python web framework
- **Django REST Framework**: API development
- **Django CORS Headers**: Cross-origin resource sharing
- **SQLite**: Database (development)
- **Pillow**: Image processing

### Frontend
- **React 18**: JavaScript library for building user interfaces
- **React Router**: Client-side routing
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons
- **Axios**: HTTP client for API calls

## 📁 Project Structure

```
portfolio/
├── backend/                 # Django backend
│   ├── portfolio_backend/   # Main Django project
│   ├── portfolio/           # Portfolio app
│   ├── manage.py
│   └── requirements.txt
├── frontend/                # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 14+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:
   ```bash
   # Windows
   venv\Scripts\activate
   
   # macOS/Linux
   source venv/bin/activate
   ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Run migrations:
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. Create a superuser (optional):
   ```bash
   python manage.py createsuperuser
   ```

7. Start the development server:
   ```bash
   python manage.py runserver
   ```

The API will be available at `http://localhost:8000/api/`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

## 📊 API Endpoints

- `GET /api/` - API overview
- `GET /api/profile/` - Get profile information
- `GET /api/skills/` - Get all skills
- `GET /api/skills/?category=frontend` - Get skills by category
- `GET /api/projects/` - Get all projects
- `GET /api/projects/?featured=true` - Get featured projects
- `GET /api/projects/{id}/` - Get project details
- `GET /api/experience/` - Get work experience
- `GET /api/education/` - Get education information
- `POST /api/contact/` - Submit contact form

## 🎨 Customization

### Updating Content

1. **Profile Information**: Update the profile data in the Django admin panel or directly in the components
2. **Skills**: Add/modify skills in the Skills component or through the API
3. **Projects**: Add your projects through the Django admin or update the mock data
4. **Experience**: Update your work experience and education
5. **Contact Info**: Update contact information in the Contact component

### Styling

The project uses CSS custom properties for theming. You can customize:
- Colors in `frontend/src/index.css`
- Component styles in individual component files
- Dark/light mode themes

### Adding New Sections

1. Create a new React component in `frontend/src/components/`
2. Add the component to `App.js`
3. Create corresponding Django models and API endpoints if needed

## 🚀 Deployment

### Backend Deployment

1. Set up environment variables for production
2. Configure database settings for production
3. Collect static files: `python manage.py collectstatic`
4. Deploy to your preferred platform (Heroku, DigitalOcean, AWS, etc.)

### Frontend Deployment

1. Build the production version: `npm run build`
2. Deploy the `build` folder to your hosting service (Netlify, Vercel, etc.)
3. Update API URLs in the frontend for production

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

## 🙏 Acknowledgments

- [Django](https://www.djangoproject.com/)
- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [Inter Font](https://rsms.me/inter/)
