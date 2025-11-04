# 💾 Windsurf Chat Backup Toolkit

> **Secure, local, easy chat backups for Windsurf IDE**

Backup your Windsurf chat conversations with one click. 100% local processing, no cloud uploads, your data stays on your machine.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform: macOS](https://img.shields.io/badge/Platform-macOS-blue.svg)](https://www.apple.com/macos/)
[![Windsurf Compatible](https://img.shields.io/badge/Windsurf-Compatible-green.svg)](https://codeium.com/windsurf)

---

## 🎯 Features

- ✅ **One-Click Backup** - Multiple methods to suit your workflow
- ✅ **100% Local** - No external API calls, no cloud uploads
- ✅ **Multiple Methods** - Extension, desktop shortcut, or manual script
- ✅ **Keyboard Shortcut** - `Cmd+Shift+B` for instant backup
- ✅ **Auto-Save** - Saves to Downloads folder automatically
- ✅ **JSON Format** - Easy to read, parse, and archive
- ✅ **Open Source** - MIT licensed, fully transparent

---

## 🚀 Quick Start

### Method 1: Extension (Recommended)

1. Download this repository
2. Open Windsurf
3. Press `Cmd+Shift+P`
4. Type: `Developer: Install Extension from Location`
5. Select the `extension/` folder
6. Press `Cmd+Shift+B` to backup!

### Method 2: Desktop Shortcut

1. Download this repository
2. Run the installer: `./install.sh`
3. Double-click the desktop icon to backup

### Method 3: Manual Script

1. Open Windsurf DevTools (`Cmd+Option+I`)
2. Copy/paste `scripts/manual-backup.js`
3. Press Enter

---

## 📦 What's Included

```
windsurf-chat-history-extension/
├── extension/              # Windsurf extension
│   ├── package.json
│   ├── extension.js
│   └── README.md
├── scripts/                # Backup scripts
│   ├── manual-backup.js
│   ├── auto-backup.js
│   └── desktop-launcher.sh
├── docs/                   # Documentation
│   ├── guide.html
│   ├── installation.md
│   └── troubleshooting.md
├── install.sh              # One-click installer
├── README.md               # This file
└── LICENSE                 # MIT License
```

---

## 📖 Documentation

- **[Installation Guide](docs/installation.md)** - Detailed setup instructions
- **[User Guide](docs/guide.html)** - Beautiful HTML guide (open in browser)
- **[Troubleshooting](docs/troubleshooting.md)** - Common issues and solutions
- **[API Reference](docs/api.md)** - For developers

---

## 🎯 Usage

### Extension Method

After installation, simply press:

```
Cmd+Shift+B
```

Or use Command Palette:

```
Cmd+Shift+P → "Backup Chat Now"
```

### Desktop Shortcut

Double-click the desktop icon:

```
💾 Backup Windsurf Chats
```

### Manual Script

In DevTools console:

```javascript
// Backup all visible chats
captureAllChatsNow()

// See available chats
showAvailableChats()

// Backup specific chat
captureSpecificChat(0)
```

---

## 📊 What Gets Backed Up

### ✅ Captures:
- Currently open/visible chat windows
- Active chat sessions
- All messages in visible chats
- Chat metadata (timestamps, IDs)

### ❌ Does NOT Capture:
- Closed chat sessions
- Historical chats (from database)
- Other users' chats
- System messages

**Note:** The toolkit reads from the browser DOM (what's currently rendered), not from Windsurf's internal database.

---

## 📁 Output Format

Backups are saved to `~/Downloads/` as JSON files:

```json
{
  "captureTime": "2025-11-03T21:30:00.000Z",
  "capturedReadable": "11/3/2025, 9:30:00 PM",
  "totalChats": 2,
  "chats": [
    {
      "chatId": "chat_0",
      "iframeIndex": 0,
      "content": "Full conversation...",
      "length": 15234,
      "timestamp": "2025-11-03T21:30:00.000Z"
    }
  ]
}
```

---

## 🔒 Security & Privacy

- **100% Local Processing** - All operations happen on your machine
- **No External Calls** - No API requests, no telemetry
- **No Cloud Uploads** - Data never leaves your computer
- **Open Source** - Fully auditable code
- **MIT Licensed** - Free to use, modify, and distribute

**Your data, your machine, your control.**

---

## 🛠️ Installation

### Automatic Installation

```bash
git clone https://github.com/aimarketingflow/windsurf-chat-history-extension.git
cd windsurf-chat-history-extension
./install.sh
```

### Manual Installation

See [Installation Guide](docs/installation.md) for detailed instructions.

---

## 💡 Best Practices

### Daily Workflow:
1. **Morning:** Backup yesterday's chats
2. **During Work:** Backup after important conversations
3. **End of Day:** Backup today's chats

### Before Important Work:
1. Open all relevant chats
2. Run backup
3. Work on project
4. Run backup again

### Weekly Archive:
1. Open all chats from the week
2. Run backup
3. Move to archive folder

---

## 🔧 Troubleshooting

### Extension Not Working
- Reload Windsurf: `Cmd+Shift+P` → "Reload Window"
- Check Extensions panel - is it enabled?
- Try reinstalling

### No Chats Captured
- Make sure chat windows are open and visible
- Try switching between chats to load them
- Run `showAvailableChats()` to debug

### Keyboard Shortcut Conflict
- Open: Preferences → Keyboard Shortcuts
- Search: `windsurf-chat-backup`
- Change to different shortcut

See [Troubleshooting Guide](docs/troubleshooting.md) for more.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 Changelog

### v1.0.0 (2025-11-03)
- Initial release
- Extension with keyboard shortcut
- Desktop launcher
- Manual backup script
- HTML documentation
- Auto-installer

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built for the Windsurf community
- Inspired by the need for local data control
- Thanks to all contributors

---

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/aimarketingflow/windsurf-chat-history-extension/issues)
- **Discussions:** [GitHub Discussions](https://github.com/aimarketingflow/windsurf-chat-history-extension/discussions)
- **Email:** your.email@example.com

---

## 🌟 Star History

If you find this useful, please consider giving it a star! ⭐

---

**Made with ❤️ for the Windsurf community**

*Your chats, your data, your control.*
