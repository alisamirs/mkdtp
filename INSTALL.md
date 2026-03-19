# How to Install mkdtp Globally

## Step 1: Navigate to Project Directory

```bash
cd E:\Progs\cetera\Dev Studies\PY\mkdtp-project
```

## Step 2: Install Globally

```bash
npm install -g .
```

This will:
- Install dependencies (markdown-it, highlight.js, puppeteer)
- Register `mkdtp` as a global command
- Make it available from anywhere

## Step 3: Verify Installation

```bash
mkdtp --help
```

Should show the help menu.

## Step 4: Use Anywhere

```bash
# Works from any directory now!
mkdtp C:\Users\ali19\Documents\file.md

# Or with relative paths
cd C:\Users\ali19\Documents
mkdtp guide.md guide.pdf
```

## Uninstall

```bash
npm uninstall -g mkdtp
```

## Troubleshooting

### "Command not found" after global install

Find NPM bin directory:
```bash
npm config get prefix
```

Add to Windows PATH:
1. Search "Environment Variables"
2. Edit System Environment Variables
3. Add the npm prefix path to PATH
4. Restart terminal

### Permission Denied (Linux/Mac)
```bash
chmod +x mkdtp
npm install -g .
```

### Dependencies Not Installing

Make sure you're in the mkdtp-project directory:
```bash
cd mkdtp-project
npm install -g .
```

## Files in This Package

- `mkdtp` - The CLI tool (executable)
- `package.json` - Dependencies and configuration
- `README.md` - Project overview
- `README-CLI.md` - Full documentation
- `QUICKSTART.md` - Quick reference
- `gen-pdf.js` - Original script (reference)

---

**After installation, you can use:**
```bash
mkdtp document.md
mkdtp file.md output.pdf
mkdtp --help
```

From any terminal in any directory! 🚀
