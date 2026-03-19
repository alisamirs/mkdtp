# MarkDown To PDF (mkdtp) - CLI Tool

Convert any Markdown file to a beautifully formatted PDF with MathJax formula support.

## Installation

### Option 1: Install Globally (Recommended)
```bash
npm install -g mkdtp
```

Or install from this directory:
```bash
npm install -g .
```

### Option 2: Use Locally
```bash
node mkdtp <input.md> [output.pdf]
```

## Usage

### Basic Usage
```bash
mkdtp document.md
```
Creates: `document.pdf`

### Specify Output File
```bash
mkdtp input.md output.pdf
```

### With Paths
```bash
mkdtp ./docs/guide.md ./output/guide.pdf
```

## Features

✅ **MathJax Formula Rendering** - SVG-based math formulas
- Perfect for financial documents with RSI, moving averages, etc.
- Inline: `$formula$`
- Display: `$$formula$$`

✅ **Professional Markdown Styling**
- Clean, GitHub-like appearance
- Proper typography and spacing
- Responsive layout

✅ **Code Syntax Highlighting**
- Python, JavaScript, SQL, and 180+ languages
- GitHub color scheme

✅ **Full Markdown Support**
- Tables, lists, blockquotes
- Images, links, emphasis
- Horizontal rules, code blocks

## Examples

### Financial Document (Stock Strategies)
```bash
mkdtp StockStrtegies.md StockStrtegies.pdf
```

### Technical Documentation
```bash
mkdtp README.md README.pdf
```

### Research Paper with Math
```bash
mkdtp thesis.md thesis.pdf
```

## Troubleshooting

### "Command not found" (Global Install)
Make sure npm bin directory is in PATH:
```bash
npm config get prefix
# Add this path to your system PATH environment variable
```

### Large File Size
First PDF generation downloads Puppeteer dependencies (~150MB). 
Subsequent runs are faster.

### Formula Not Rendering
- Use proper LaTeX syntax: `$x = \frac{a}{b}$`
- Ensure spaces don't break delimiters: `$ x $` won't work (use `$x$`)

## Uninstall

```bash
npm uninstall -g mkdtp
```

## For Developers

To modify the CLI tool:

1. Edit `mkdtp` file
2. Test locally: `node mkdtp test.md`
3. Reinstall: `npm install -g .`

---

**Created with ❤️ for financial students and technical writers**
