@echo off
title Push Portfolio to GitHub
cd /d "%~dp0"
echo ========================================================
echo       🚀 Pushing Portfolio to GitHub 🚀
echo ========================================================
echo.
echo Target Repository: https://github.com/vyshnavireddy-ctrl/portfolio.git
echo.
set "PATH=C:\Users\PrudhviRaj\AppData\Local\GitHubDesktop\app-3.6.4\resources\app\git\cmd;%PATH%"

git branch -M main
git remote remove origin 2>nul
git remote add origin https://github.com/vyshnavireddy-ctrl/portfolio.git
git add .
git commit -m "Update portfolio files" 2>nul
echo.
echo Connecting and pushing to GitHub...
echo.
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo   🎉 SUCCESS! All files pushed to GitHub successfully!
    echo ========================================================
) else (
    echo ========================================================
    echo   ⚠️ Push requires authentication.
    echo   If you have a GitHub Personal Access Token (PAT), you can
    echo   enter your GitHub username and PAT as password.
    echo ========================================================
)
echo.
pause
