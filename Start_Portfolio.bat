@echo off
title Vyshu's Creative World - 3D Portfolio
cd /d "%~dp0"
echo ========================================================
echo       ✨ Starting Vyshu's Creative World ✨
echo ========================================================
echo.
echo Initializing 3D Portfolio server...
echo Your browser will automatically open at http://localhost:5173/ as soon as it is ready!
echo.
call npx vite --open --port 5173 --host
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Server stopped or encountered an issue. Trying npm run dev...
    call npm run dev -- --open --port 5173 --host
)
pause

