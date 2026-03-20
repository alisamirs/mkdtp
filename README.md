# mkdtp - MarkDown To PDF CLI Tool

A command-line tool to convert Markdown files to beautifully formatted PDFs with MathJax formula support.

## 📦 Project Structure

```
mkdtp-project/
├── mkdtp                  # Main executable
├── package.json           # NPM package configuration
├── README.md              # This file
├── README-CLI.md          # Full documentation
├── QUICKSTART.md          # Quick start guide
├── INSTALL.md             # Installation instructions
├── gen-pdf.js             # Original script (reference)
├── .gitignore             # Git ignore rules
└── node_modules/          # Dependencies (auto-generated)
```

## 🚀 Installation

### 1. Quick Install (Recommended)

#### On macOS / Linux:
```bash
curl -fsSL https://raw.githubusercontent.com/YOUR_USERNAME/mkdtp/main/install.sh | bash
```

#### On Windows (PowerShell):
```powershell
irm https://raw.githubusercontent.com/YOUR_USERNAME/mkdtp/main/install.bat | iex
```

### 2. Using NPM (Requires Node.js)

```bash
npm install -g mkdtp
```

### 3. Using Package Managers (Coming Soon)

```bash
# Homebrew (macOS)
brew install mkdtp

# apt (Ubuntu/Debian)
sudo apt-get install mkdtp

# Chocolatey (Windows)
choco install mkdtp
```

### 4. Manual Installation

Clone the repository and install:
```bash
git clone https://github.com/YOUR_USERNAME/mkdtp.git
cd mkdtp
npm install -g .
```

## 🚀 Quick Start

After installation, use it anywhere:

```bash
mkdtp document.md
mkdtp input.md output.pdf
mkdtp --help
```

## ✨ Features

- ✅ **MathJax Formula Rendering** - SVG-based mathematical formulas
- ✅ **Syntax Highlighting** - 180+ programming languages
- ✅ **Professional Styling** - GitHub-like markdown appearance
- ✅ **Full Markdown Support** - Tables, lists, images, links, blockquotes
- ✅ **Global CLI Tool** - Works from any directory

## 📚 Documentation

- **[README-CLI.md](README-CLI.md)** - Complete documentation
- **[QUICKSTART.md](QUICKSTART.md)** - Quick start examples
- **[INSTALL.md](INSTALL.md)** - Installation guide

## 💡 Usage Examples

### Basic conversion
```bash
mkdtp document.md
# Creates: document.pdf
```

### With custom output name
```bash
mkdtp input.md output.pdf
```

### With file paths
```bash
mkdtp ./docs/guide.md ./output/guide.pdf
```

### Get help
```bash
mkdtp --help
mkdtp --version
```

## 🎯 Perfect For

- 📊 Financial documents (RSI, EMA, trading strategies)
- 📖 Textbooks and educational materials
- 📝 Technical documentation
- 🎓 Research papers with mathematical formulas
- 📋 Reports and presentations

## 🔧 Development

To modify the CLI tool:

1. Edit `mkdtp` file
2. Test locally: `node mkdtp test.md`
3. Reinstall: `npm install -g .`

## 📄 Files

- **mkdtp** - Executable Node.js script (CLI entry point)
- **package.json** - NPM package configuration (dependencies & metadata)
- **gen-pdf.js** - Original Puppeteer/MathJax implementation
- **README.md** - Project overview
- **README-CLI.md** - Comprehensive documentation
- **QUICKSTART.md** - Quick reference guide
- **INSTALL.md** - Installation steps
- **.gitignore** - Git ignore rules

## 🛠️ Technology Stack

- **Node.js** - Runtime
- **markdown-it** - Markdown parser
- **highlight.js** - Code syntax highlighting
- **MathJax 3** - Mathematical formula rendering (SVG)
- **Puppeteer** - Headless Chrome automation

## 📦 Dependencies

```json
{
  "markdown-it": "^13.0.1",
  "highlight.js": "^11.8.0",
  "puppeteer": "^20.0.0"
}
```

## 🌐 Installation Methods

### Method 1: Global Install (Recommended)
```bash
npm install -g .
```

### Method 2: Local Use
```bash
node mkdtp document.md
```

### Method 3: Copy to PATH
Copy `mkdtp` to your system PATH and use directly

## 🆘 Troubleshooting

### "Command not found" after global install
- Verify npm bin directory is in PATH
- Run: `npm config get prefix`
- Add that path to system PATH environment variable

### Large initial download
- First run downloads Puppeteer (~150MB)
- Subsequent runs are faster (cached)

### Formulas not rendering
- Use correct LaTeX syntax: `$x = \frac{a}{b}$`
- Avoid spaces in delimiters: `$ x $` won't work

## 📄 License

MIT

## 🙏 Credits

Created for financial students and technical writers who need beautiful PDFs with mathematical precision.

---

**Ready to use?** See [QUICKSTART.md](QUICKSTART.md) or [INSTALL.md](INSTALL.md)!
