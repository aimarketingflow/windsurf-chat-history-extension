# Installation Guide

## 🚀 Quick Install

### Option 1: Automatic Installation (Recommended)

```bash
# Clone the repository
git clone https://github.com/aimarketingflow/windsurf-chat-history-extension.git

# Navigate to the directory
cd windsurf-chat-history-extension

# Run the installer
./install.sh
```

The installer will:
- ✅ Create desktop shortcuts
- ✅ Set up configuration
- ✅ Provide extension installation instructions
- ✅ Open the user guide

---

### Option 2: Manual Installation

#### Step 1: Download

Download the latest release from [GitHub Releases](https://github.com/aimarketingflow/windsurf-chat-history-extension/releases)

Or clone the repository:
```bash
git clone https://github.com/aimarketingflow/windsurf-chat-history-extension.git
```

#### Step 2: Install Extension

1. Open Windsurf
2. Press `Cmd+Shift+P`
3. Type: `Developer: Install Extension from Location`
4. Navigate to the `extension/` folder
5. Select the folder
6. Reload Windsurf when prompted

#### Step 3: Create Desktop Shortcut (Optional)

```bash
# From the toolkit directory
cp scripts/desktop-launcher.sh ~/Desktop/"💾 Backup Windsurf Chats.command"
chmod +x ~/Desktop/"💾 Backup Windsurf Chats.command"
```

---

## 📋 Requirements

### System Requirements
- **OS:** macOS 11.0 or later
- **Windsurf:** Latest version
- **Node.js:** 14.0 or later (for extension development)
- **Disk Space:** ~5MB for toolkit, variable for backups

### Permissions Required
- **Accessibility:** For desktop launcher automation
- **File System:** Read/write access to Downloads folder

---

## 🔧 Platform-Specific Instructions

### macOS

1. **Install Windsurf** (if not already installed)
   ```bash
   # Download from https://codeium.com/windsurf
   ```

2. **Grant Accessibility Permissions**
   - System Preferences → Security & Privacy → Accessibility
   - Add Terminal to the list
   - Check the box next to Terminal

3. **Run Installer**
   ```bash
   ./install.sh
   ```

### Windows (Coming Soon)

Windows support is planned for v1.1.0

### Linux (Coming Soon)

Linux support is planned for v1.1.0

---

## 🎯 Installation Methods Comparison

| Method | Pros | Cons | Best For |
|--------|------|------|----------|
| **Extension** | Fast, integrated, keyboard shortcut | Requires installation | Daily use |
| **Desktop** | Visible, one-click | Requires permissions | Quick access |
| **Manual** | No installation, full control | Manual steps | Debugging |

---

## ✅ Verify Installation

### Test Extension

1. Open Windsurf
2. Press `Cmd+Shift+B`
3. You should see: "Starting chat backup..."
4. Check `~/Downloads/` for backup file

### Test Desktop Shortcut

1. Double-click the desktop icon
2. Wait for completion message
3. Check `~/Downloads/` for backup file

### Test Manual Script

1. Open DevTools (`Cmd+Option+I`)
2. Copy/paste from `scripts/manual-backup.js`
3. Press Enter
4. Check `~/Downloads/` for backup file

---

## 🔄 Updating

### Update Extension

1. Pull latest changes:
   ```bash
   cd windsurf-chat-history-extension
   git pull origin main
   ```

2. Reload extension in Windsurf:
   - `Cmd+Shift+P` → "Reload Window"

### Update Scripts

```bash
cd windsurf-chat-history-extension
git pull origin main
./install.sh
```

---

## 🗑️ Uninstallation

### Remove Extension

1. Open Windsurf
2. Go to Extensions (`Cmd+Shift+X`)
3. Find "Windsurf Chat Backup"
4. Click "Uninstall"

### Remove Desktop Shortcut

```bash
rm ~/Desktop/"💾 Backup Windsurf Chats.command"
```

### Remove Configuration

```bash
rm -rf ~/.windsurf-chat-backup
```

### Remove Toolkit

```bash
rm -rf windsurf-chat-history-extension
```

---

## 🐛 Troubleshooting Installation

### Extension Won't Install

**Problem:** "Cannot install extension"

**Solutions:**
1. Make sure you're selecting the `extension/` folder, not a file
2. Try: `Developer: Install Extension from Location` instead of "Install from VSIX"
3. Check Windsurf version (must be 1.0.0+)
4. Try restarting Windsurf

### Desktop Shortcut Doesn't Work

**Problem:** "Permission denied" or nothing happens

**Solutions:**
1. Make it executable:
   ```bash
   chmod +x ~/Desktop/"💾 Backup Windsurf Chats.command"
   ```
2. Grant accessibility permissions (see above)
3. Check if Windsurf is running

### Installer Fails

**Problem:** `./install.sh` gives error

**Solutions:**
1. Make it executable:
   ```bash
   chmod +x install.sh
   ```
2. Run with bash explicitly:
   ```bash
   bash install.sh
   ```
3. Check file permissions in the directory

---

## 📞 Need Help?

- **Issues:** [GitHub Issues](https://github.com/aimarketingflow/windsurf-chat-history-extension/issues)
- **Discussions:** [GitHub Discussions](https://github.com/aimarketingflow/windsurf-chat-history-extension/discussions)
- **Email:** your.email@example.com

---

## 🎊 Next Steps

After installation:

1. **Read the User Guide:** Open `docs/guide.html`
2. **Test a Backup:** Press `Cmd+Shift+B`
3. **Check Output:** Look in `~/Downloads/`
4. **Customize:** Set up your preferred workflow

**Happy backing up!** 💾
