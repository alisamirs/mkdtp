# Publishing mkdtp to NPM Registry

Once you publish to NPM, users can install with:
```bash
npm install -g mkdtp
```

## Prerequisites

1. **Create NPM Account** (if you don't have one)
   - Go to https://www.npmjs.com/signup
   - Create a free account
   - Verify email

2. **Install Node.js and npm**
   - Download from https://nodejs.org/
   - Verify: `npm --version`

## Publishing Steps

### Step 1: Update package.json

Replace these placeholders:
- `YOUR_USERNAME` → Your GitHub/npm username
- `Your Name` → Your name
- `your.email@example.com` → Your email

```bash
# Edit package.json
nano package.json  # or use your editor
```

### Step 2: Login to NPM

```bash
npm login
```

You'll be asked for:
- Username
- Password
- Email (used for npm account)

### Step 3: Publish

```bash
cd E:\Progs\mkdtp
npm publish
```

**First publish:** You publish without any scoping
**Subsequent publishes:** Update version in package.json before publishing

### Step 4: Verify Publication

```bash
npm view mkdtp
```

Or visit: https://www.npmjs.com/package/mkdtp

## After Publishing

### Users can install with:
```bash
npm install -g mkdtp
```

### Update Version for Future Releases

```bash
# Patch release (1.0.0 → 1.0.1)
npm version patch

# Minor release (1.0.0 → 1.1.0)
npm version minor

# Major release (1.0.0 → 2.0.0)
npm version major

# Then publish
npm publish
```

### Create GitHub Release

```bash
git tag v1.0.0
git push origin v1.0.0
```

Then on GitHub:
1. Go to Releases
2. Create Release from tag
3. Add release notes

## Scoped Packages (Optional)

If you want an organization package:

```json
{
  "name": "@YOUR_ORG/mkdtp"
}
```

```bash
npm publish --access public
```

## Troubleshooting

### "You must be logged in to publish"
```bash
npm login
npm whoami  # verify login
```

### "Package name already taken"
- Choose a unique name
- Or use scoped package: `@yourname/mkdtp`

### "Publish failed"
- Check for typos in package.json
- Ensure all required fields are present
- Verify npm account is verified

## What Gets Published

Files included (from package.json "files" field):
- `mkdtp` - Executable
- `package.json` - Configuration
- `README.md` - Documentation
- `LICENSE` - License file

Excluded (by .npmignore):
- `.git`, `.github` - Git files
- `node_modules` - Dependencies
- Test files, logs, etc.

## NPM Statistics

After publishing, you can see:
- Downloads: https://www.npmjs.com/package/mkdtp/stat/last-week
- Version history
- Dependents using your package
- Open issues

---

**Questions?** See NPM documentation: https://docs.npmjs.com/
