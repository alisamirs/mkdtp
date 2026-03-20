#!/bin/bash

# mkdtp installation script
# Download and install mkdtp globally

set -e

echo "📦 Installing mkdtp..."

if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm is required but not installed"
    echo "Please install Node.js and npm from https://nodejs.org/"
    exit 1
fi

echo "⏳ Installing mkdtp from npm..."
npm install -g mkdtp

echo ""
echo "✅ Installation complete!"
echo ""
echo "📖 Quick start:"
echo "   mkdtp document.md"
echo "   mkdtp input.md output.pdf"
echo "   mkdtp --help"
echo ""
echo "📚 Documentation: https://github.com/YOUR_USERNAME/mkdtp"
