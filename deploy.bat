@echo off
echo 🚀 Portfolio Deployment Helper
echo.

echo Building React application for production...
cd "C:\Users\CHANDRA MOULI\Desktop\portfolio\frontend"
cmd /c "npm run build"

echo.
echo ✅ Build complete! Your portfolio is ready for deployment.
echo.
echo 📁 Built files are in: frontend/build/
echo.
echo 🌐 Deployment Options:
echo.
echo 1. Vercel (Recommended):
echo    - Install: npm install -g vercel
echo    - Deploy: cd .. && vercel
echo.
echo 2. Netlify:
echo    - Go to netlify.com
echo    - Drag and drop the 'frontend/build' folder
echo.
echo 3. Manual Hosting:
echo    - Upload 'frontend/build' folder contents to any web server
echo.
echo 📖 See DEPLOYMENT_GUIDE.md for detailed instructions
echo.
pause
