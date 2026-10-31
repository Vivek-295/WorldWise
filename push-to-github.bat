@echo off
echo ========================================================
echo Pushing WorldWise to your GitHub (Vivek-295)
echo ========================================================
echo.
cd /d %~dp0

echo Current remote URL:
git remote -v
echo.
echo Pushing clean main branch to GitHub...
echo (If prompted, click 'Sign in with your browser')
echo.
git push -u origin main --force

echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo SUCCESS! Project successfully pushed to your GitHub!
    echo Check it here: https://github.com/Vivek-295/WorldWise
    echo ========================================================
) else (
    echo ========================================================
    echo Push failed. Please check your GitHub credentials or connection.
    echo ========================================================
)
pause
