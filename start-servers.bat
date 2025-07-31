@echo off
echo Starting Portfolio Website...
echo.

echo Installing frontend dependencies (if needed)...
cd "C:\Users\CHANDRA MOULI\Desktop\portfolio\frontend"
if not exist "node_modules" (
    echo Installing React dependencies...
    cmd /c "npm install"
    echo.
)

echo Starting Django backend server on port 8000...
cd "C:\Users\CHANDRA MOULI\Desktop\portfolio\backend"
start "Django Backend" cmd /k "python manage.py runserver 8000"

echo Waiting 5 seconds for backend to start...
timeout /t 5 /nobreak > nul

cd "C:\Users\CHANDRA MOULI\Desktop\portfolio\frontend"
echo Starting React frontend server on port 3000...
start "React Frontend" cmd /k "npm start"

echo.
echo Portfolio website is starting!
echo Backend: http://localhost:8000
echo Frontend: http://localhost:3000
echo.
echo Both servers are starting in separate windows.
pause
