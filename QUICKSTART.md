# 🎯 Quick Start: mkdtp (MarkDown To PDF)

## 5-Second Setup

```bash
npm install
npm install -g .
mkdtp document.md
```

Done! PDF created.

## Usage

### Convert any markdown file:
```bash
mkdtp myfile.md
# Creates: myfile.pdf
```

### Specify output name:
```bash
mkdtp input.md output.pdf
```

### With paths:
```bash
mkdtp ./docs/guide.md ./outputs/guide.pdf
```

### Get help:
```bash
mkdtp --help
```

## What It Does

✅ Converts Markdown → PDF
✅ Renders math formulas (MathJax/SVG)
✅ Syntax highlights code
✅ Professional styling
✅ Works with: Tables, lists, images, links, etc.

## Perfect For

- 📊 Financial documents (RSI, EMA formulas)
- 📖 Textbooks and guides
- 📝 Technical documentation
- 🎓 Research papers with math
- 📋 Reports and presentations

## Example

**input.md:**
```markdown
# Stock Analysis

The RSI formula:
$RSI = 100 - \left[\frac{100}{1 + RS}\right]$

Where RS is the ratio of average gains to losses.
```

**Run:**
```bash
mkdtp input.md analysis.pdf
```

**Result:** Beautiful PDF with perfectly rendered formula! ✨

---

**Questions?** See `README-CLI.md` for full documentation.
