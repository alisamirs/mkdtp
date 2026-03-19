# Publishing mkdtp to GitHub

The project has been initialized with git. Follow these steps to publish to GitHub:

## Option 1: Using GitHub Web Interface (Easiest)

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `mkdtp`
   - Description: `MarkDown To PDF CLI Tool - Convert markdown files to beautifully formatted PDFs with MathJax formula support`
   - Public (recommended) or Private
   - DO NOT add README, .gitignore, or license (we already have these)
   - Click "Create repository"

2. **Push your code:**
   ```bash
   cd E:\Progs\mkdtp
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/mkdtp.git
   git push -u origin main
   ```
   (Replace YOUR_USERNAME with your GitHub username)

## Option 2: Using GitHub CLI

If you have GitHub CLI installed:

```bash
cd E:\Progs\mkdtp
gh repo create mkdtp --public --source=. --remote=origin --push
```

## Option 3: Using SSH (For Advanced Users)

```bash
cd E:\Progs\mkdtp
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/mkdtp.git
git push -u origin main
```

## After Publishing

### Update files to reference your GitHub repository:

Update `README.md`:
```markdown
## 🚀 Installation

### From NPM (coming soon)
```bash
npm install -g mkdtp
```
```

### From GitHub
```bash
git clone https://github.com/YOUR_USERNAME/mkdtp.git
cd mkdtp
npm install -g .
```
```

## GitHub Features to Add

After publishing, consider adding:

1. **GitHub Actions** - CI/CD for testing
2. **Releases** - Tag releases on GitHub
3. **Issues** - Enable issue templates
4. **Discussions** - Enable discussions
5. **NPM Publication** - Publish to NPM registry

## Create GitHub Release

```bash
git tag v1.0.0
git push origin v1.0.0
```

Then create a release on GitHub with release notes.

## Project Structure on GitHub

```
mkdtp/
├── .git/                  # Git history
├── .gitignore             # Git ignore rules
├── mkdtp                  # Main executable
├── package.json           # NPM configuration
├── README.md              # Main documentation
├── README-CLI.md          # CLI documentation
├── QUICKSTART.md          # Quick start guide
├── INSTALL.md             # Installation guide
├── gen-pdf.js             # Original implementation
├── node_modules/          # Dependencies (ignored by git)
└── .github/               # GitHub specific files (optional)
    └── workflows/         # GitHub Actions
```

## Verify Git Status

```bash
cd E:\Progs\mkdtp
git status              # Should show clean working tree
git log --oneline       # Should show initial commit
git remote -v           # Should show origin URL
```

---

**Next Steps:**
1. Choose an option above to publish
2. Go to your GitHub repository
3. Add a GitHub Actions workflow (optional)
4. Publish to NPM registry (optional)
