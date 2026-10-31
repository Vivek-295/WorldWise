@echo off
echo ===================================================
echo Starting WorldWise Application
echo ===================================================

echo Starting Backend on port 4000...
start "WorldWise Backend" cmd /k "cd /d %~dp0backend && npm run start"

echo Starting Frontend on port 5173...
start "WorldWise Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

echo Both services launched!
echo Backend: http://localhost:4000
echo Frontend: http://localhost:5173
pause
