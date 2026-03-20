# How to Install mkdtp

Choose your preferred installation method:

## Option 1: Quick One-Liner (Recommended)

### macOS / Linux
```bash
curl -fsSL https://raw.githubusercontent.com/YOUR_USERNAME/mkdtp/main/install.sh | bash
```

### Windows (PowerShell)
```powershell
irm https://raw.githubusercontent.com/YOUR_USERNAME/mkdtp/main/install.bat | iex
```

**What it does:**
- Downloads the installer script
- Checks for npm/Node.js
- Installs mkdtp globally
- Confirms installation with usage examples

## Option 2: NPM (Standard)

```bash
npm install -g mkdtp
```

**Requirements:** Node.js and npm installed

## Option 3: Manual Installation from Source

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/mkdtp.git
cd mkdtp

# Install globally
npm install -g .
```

## Option 4: Package Managers (Coming Soon)

Once published to package registries:

### Homebrew (macOS)
```bash
brew install mkdtp
```

### apt (Ubuntu/Debian)
```bash
sudo apt-get install mkdtp
```

### Chocolatey (Windows)
```powershell
choco install mkdtp
```

### Scoop (Windows)
```powershell
scoop install mkdtp
```

## Verify Installation

```bash
mkdtp --version
mkdtp --help
```

Should display version and help information.

## Troubleshooting

### "Command not found" after installation

**On Windows:**
1. Open "Edit Environment Variables"
2. Add npm bin directory to PATH
3. Restart terminal/PowerShell

**On macOS/Linux:**
```bash
# Check npm bin location
npm config get prefix

# Should be in your PATH, typically: /usr/local/bin or ~/.npm/bin
```

### npm: command not found

Install Node.js from: https://nodejs.org/

### Permission denied (macOS/Linux)

```bash
sudo npm install -g mkdtp
```

## Uninstall

```bash
npm uninstall -g mkdtp
```

## Next Steps

After installing, see [QUICKSTART.md](QUICKSTART.md) for usage examples.

---

**Having trouble?** Check the [README.md](README.md) or create an issue on GitHub.

