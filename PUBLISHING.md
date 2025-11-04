# Publishing Guide

## 🚀 How to Publish This Toolkit

### Prerequisites

- GitHub account
- npm account (optional, for npm registry)
- Git installed
- Node.js installed

---

## 📦 Step 1: Prepare Repository

### 1.1 Create GitHub Repository

```bash
# On GitHub.com:
# 1. Click "New Repository"
# 2. Name: windsurf-chat-history-extension
# 3. Description: "Secure, local chat backups for Windsurf IDE"
# 4. Public repository
# 5. Don't initialize with README (we have one)
```

### 1.2 Update Repository URLs

Edit these files and replace `yourusername` with your GitHub username:

- `README.md`
- `package.json`
- `CONTRIBUTING.md`
- `docs/installation.md`

```bash
# Quick find and replace
find . -type f -name "*.md" -o -name "*.json" | xargs sed -i '' 's/yourusername/YOUR_GITHUB_USERNAME/g'
```

### 1.3 Update Contact Info

Replace placeholder emails:

```bash
find . -type f -name "*.md" -o -name "*.json" | xargs sed -i '' 's/your.email@example.com/YOUR_EMAIL/g'
```

---

## 🔧 Step 2: Initialize Git

```bash
cd windsurf-chat-history-extension

# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial release v1.0.0"

# Add remote
git remote add origin https://github.com/YOUR_USERNAME/windsurf-chat-history-extension.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🏷️ Step 3: Create Release

### 3.1 Tag the Release

```bash
# Create and push tag
git tag -a v1.0.0 -m "Release v1.0.0 - Initial public release"
git push origin v1.0.0
```

### 3.2 Create GitHub Release

1. Go to your repository on GitHub
2. Click "Releases" → "Create a new release"
3. Select tag: `v1.0.0`
4. Title: `v1.0.0 - Initial Release`
5. Description:

```markdown
## 🎉 Initial Release

First public release of Windsurf Chat Backup Toolkit!

### Features
- ✅ One-click backup with keyboard shortcut (Cmd+Shift+B)
- ✅ Multiple backup methods (extension, desktop, manual)
- ✅ 100% local processing (no cloud uploads)
- ✅ Beautiful HTML documentation
- ✅ Auto-installer for easy setup

### Installation

**Quick Install:**
```bash
git clone https://github.com/YOUR_USERNAME/windsurf-chat-history-extension.git
cd windsurf-chat-history-extension
./install.sh
```

**Documentation:**
Open `docs/guide.html` in your browser for the complete guide.

### What's Included
- Windsurf extension
- Desktop launcher
- Manual backup script
- Comprehensive documentation
- MIT License

### Platform Support
- ✅ macOS (tested on macOS 14+)
- ⏳ Windows (coming in v1.1.0)
- ⏳ Linux (coming in v1.1.0)

### Known Limitations
- Only captures visible/open chats
- Cannot access Windsurf's internal database
- macOS only (uses AppleScript)

### Feedback
This is the first release! Please report issues or suggestions.

**Happy backing up!** 💾
```

6. Attach files (optional):
   - Create a zip: `zip -r windsurf-chat-history-extension-v1.0.0.zip .`
   - Upload to release

7. Click "Publish release"

---

## 📢 Step 4: Promote Your Tool

### 4.1 Add Topics to Repository

On GitHub, add these topics:
- `windsurf`
- `backup`
- `chat`
- `privacy`
- `local-first`
- `vscode-extension`
- `ide`
- `macos`

### 4.2 Create Social Media Posts

**Twitter/X:**
```
🚀 Just released: Windsurf Chat Backup Toolkit!

💾 One-click local backups for @codeiumdev Windsurf chats
🔒 100% local, no cloud uploads
⌨️ Cmd+Shift+B to backup
📖 Open source (MIT)

Check it out: https://github.com/YOUR_USERNAME/windsurf-chat-history-extension

#Windsurf #OpenSource #Privacy
```

**Reddit:**
Post to:
- r/Windsurf (if exists)
- r/vscode
- r/opensource
- r/programming

**Dev.to Article:**
Write a blog post explaining:
- Why you built it
- How it works
- How to use it
- Future plans

### 4.3 Submit to Lists

- [Awesome Windsurf](https://github.com/search?q=awesome-windsurf) (if exists)
- [Awesome VS Code](https://github.com/viatsko/awesome-vscode)
- Product Hunt
- Hacker News (Show HN)

---

## 📦 Step 5: Publish to npm (Optional)

### 5.1 Prepare for npm

```bash
# Login to npm
npm login

# Test package
npm pack

# Check what will be published
npm publish --dry-run
```

### 5.2 Publish

```bash
# Publish to npm
npm publish

# Or publish as scoped package
npm publish --access public
```

### 5.3 Add npm Badge

Add to README.md:
```markdown
[![npm version](https://badge.fury.io/js/windsurf-chat-history-extension.svg)](https://www.npmjs.com/package/windsurf-chat-history-extension)
```

---

## 🔄 Step 6: Set Up Automation

### 6.1 GitHub Actions

Already included in `.github/workflows/release.yml`

This will automatically:
- Create release packages
- Attach to GitHub releases
- Run on version tags

### 6.2 Dependabot

Create `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
```

---

## 📊 Step 7: Analytics & Monitoring

### 7.1 GitHub Insights

Monitor:
- Stars
- Forks
- Issues
- Pull requests
- Traffic

### 7.2 npm Stats (if published)

Check:
- Downloads
- Dependents
- Versions

---

## 🎯 Step 8: Community Building

### 8.1 Enable Discussions

On GitHub:
1. Settings → Features
2. Enable "Discussions"
3. Create categories:
   - Announcements
   - Q&A
   - Feature Requests
   - Show and Tell

### 8.2 Create Issue Templates

`.github/ISSUE_TEMPLATE/bug_report.md`:
```markdown
---
name: Bug Report
about: Report a bug
title: '[BUG] '
labels: bug
---

**Describe the bug**
A clear description of the bug.

**To Reproduce**
Steps to reproduce...

**Expected behavior**
What you expected...

**System Info**
- OS: [e.g. macOS 14.0]
- Windsurf version: [e.g. 1.0.0]
- Toolkit version: [e.g. 1.0.0]

**Screenshots**
If applicable...
```

### 8.3 Create PR Template

`.github/pull_request_template.md`:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tested on macOS
- [ ] Tested all backup methods
- [ ] No console errors
- [ ] Documentation updated

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No breaking changes
```

---

## 📝 Step 9: Documentation

### 9.1 Add Badges

Add to README.md:
```markdown
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform: macOS](https://img.shields.io/badge/Platform-macOS-blue.svg)](https://www.apple.com/macos/)
[![GitHub release](https://img.shields.io/github/release/YOUR_USERNAME/windsurf-chat-history-extension.svg)](https://github.com/YOUR_USERNAME/windsurf-chat-history-extension/releases)
[![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/windsurf-chat-history-extension.svg)](https://github.com/YOUR_USERNAME/windsurf-chat-history-extension/stargazers)
```

### 9.2 Create Wiki

On GitHub, create wiki pages:
- Home
- Installation
- Usage
- Troubleshooting
- FAQ
- Development

---

## 🎊 Step 10: Launch!

### Launch Checklist

- [ ] Repository created and pushed
- [ ] Release v1.0.0 tagged and published
- [ ] README updated with correct URLs
- [ ] Documentation complete
- [ ] License file included
- [ ] Contributing guidelines added
- [ ] Issue templates created
- [ ] GitHub Actions working
- [ ] Social media posts ready
- [ ] Submitted to relevant lists

### Post-Launch

1. **Monitor Issues** - Respond within 24-48 hours
2. **Engage Community** - Answer questions, thank contributors
3. **Iterate** - Plan v1.1.0 based on feedback
4. **Document** - Keep changelog updated
5. **Promote** - Share success stories

---

## 📈 Future Versions

### v1.1.0 (Planned)
- Windows support
- Linux support
- Scheduled backups
- CLI tool

### v1.2.0 (Planned)
- Direct database access
- Cloud sync (optional)
- More export formats
- Browser extension

---

## 🙏 Thank You!

Thank you for publishing this tool and contributing to the open source community!

**Questions?** Open an issue or discussion on GitHub.

**Good luck with your launch!** 🚀
