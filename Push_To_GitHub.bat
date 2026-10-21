@echo off
title Push Portfolio to GitHub
cd /d "%~dp0"
echo ========================================================
echo       🚀 Pushing Portfolio to GitHub 🚀
echo ========================================================
echo.
echo Target Repository: https://github.com/vyshnavireddy-ctrl/portfolio.git
echo.

set "PATH=C:\Users\PrudhviRaj\AppData\Local\GitHubDesktop\app-3.6.4\resources\app\git\cmd;C:\Program Files\Git\cmd;%PATH%"

git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/vyshnavireddy-ctrl/portfolio.git
git add .
git commit -m "Update portfolio files" 2>nul

echo Connecting to GitHub and pushing main branch...
echo (If a GitHub sign-in window or browser tab opens, please authorize it)
echo.

git push -u origin main
if %ERRORLEVEL% EQU 0 goto success

echo.
echo ========================================================
echo   ⚠️ Browser sign-in didn't complete or credentials needed.
echo ========================================================
echo.
set /p "PAT=If you have a GitHub Personal Access Token (PAT), paste it here (or press Enter to exit): "
if "%PAT%"=="" goto end

echo.
echo Attempting push using your Personal Access Token...
git push -u https://vyshnavireddy-ctrl:%PAT%@github.com/vyshnavireddy-ctrl/portfolio.git main
if %ERRORLEVEL% EQU 0 goto success
goto fail

:success
echo.
echo ========================================================
echo   🎉 SUCCESS! All files have been pushed to GitHub!
echo   View your repository at:
echo   https://github.com/vyshnavireddy-ctrl/portfolio
echo ========================================================
goto end

:fail
echo.
echo ========================================================
echo   ❌ Push failed. Please verify your repository permissions.
echo ========================================================

:end
echo.
pause
