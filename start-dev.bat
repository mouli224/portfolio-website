@echo off
echo Starting Django + React Portfolio Website...
echo.

echo Starting Django backend server...
start cmd /k "cd backend && python manage.py runserver"

echo Waiting for backend to start...
timeout /t 3 /nobreak > nul

echo Starting React frontend server...
start cmd /k "cd frontend && npm start"

echo.
echo Portfolio website is starting!
echo Backend: http://localhost:8000
echo Frontend: http://localhost:3000
echo.
pause
