@echo off
echo Installing Portfolio Dependencies...
echo.

echo Installing Python backend dependencies...
cd "C:\Users\CHANDRA MOULI\Desktop\portfolio\backend"
python -m pip install -r ..\requirements.txt
echo.

echo Installing React frontend dependencies...
cd "C:\Users\CHANDRA MOULI\Desktop\portfolio\frontend"
npm install
echo.

echo Setting up database...
cd "C:\Users\CHANDRA MOULI\Desktop\portfolio\backend"
python manage.py makemigrations
python manage.py migrate
python manage.py create_sample_data
echo.

echo.
echo ✅ Setup complete! You can now run start-servers.bat
echo.
pause
