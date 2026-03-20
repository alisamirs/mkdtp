@echo off
REM mkdtp installation script for Windows
REM Download and install mkdtp globally

echo.
echo Installing mkdtp...
echo.

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo Error: npm is required but not installed
    echo Please install Node.js and npm from https://nodejs.org/
    pause
    exit /b 1
)

echo Downloading and installing mkdtp from npm...
call npm install -g mkdtp

if errorlevel 1 (
    echo Error: Installation failed
    pause
    exit /b 1
)

echo.
echo Installation complete!
echo.
echo Quick start:
echo   mkdtp document.md
echo   mkdtp input.md output.pdf
echo   mkdtp --help
echo.
echo Documentation: https://github.com/YOUR_USERNAME/mkdtp
echo.
pause
