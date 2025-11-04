# Windsurf Chat Backup Extension

Backup your Windsurf chat conversations with one click!

## Features

- 💾 **One-Click Backup** - Backup current chat or all open chats
- ⌨️ **Keyboard Shortcut** - `Cmd+Shift+B` (Mac) or `Ctrl+Shift+B` (Windows/Linux)
- 📋 **Command Palette** - Access via `Cmd+Shift+P` → "Backup Chat Now"
- 🎯 **Menu Integration** - Appears in the 3-dot menu (when available)
- 📁 **Auto-Save** - Saves to `~/Downloads/` automatically

## Installation

1. Open Windsurf
2. Go to Extensions (Cmd+Shift+X)
3. Click "..." menu → "Install from VSIX..."
4. Navigate to the `extension/` folder in the toolkit directory
5. Select the folder or package it first (see below)

**Or load unpacked:**
1. Open Windsurf
2. Go to: Extensions → "..." → "Install from VSIX..."
3. Or use Developer mode to load unpacked extension

## Usage

### Method 1: Keyboard Shortcut (Fastest)
Press `Cmd+Shift+B` to backup current chat

### Method 2: Command Palette
1. Press `Cmd+Shift+P`
2. Type "Backup Chat"
3. Select "💾 Backup Chat Now"

### Method 3: Menu (Future)
Click the 3-dot menu → "💾 Backup Chat Now"

## What Gets Backed Up

- ✅ Currently visible chat windows
- ✅ All open chat sessions
- ✅ Full conversation history (visible)
- ❌ Closed/historical chats (not visible)

## Output

**Location:** `~/Downloads/`

**Filename:** `windsurf_MANUAL_BACKUP_[timestamp].json`

**Format:** JSON with full chat content

## Requirements

- macOS (uses AppleScript for automation)
- Accessibility permissions for Terminal
- Windsurf running

## Known Issues

- Requires accessibility permissions on first run
- Only captures visible/open chats
- macOS only (Windows/Linux support coming)

## Extension Settings

This extension contributes the following settings:

* `windsurf-chat-backup.autoBackup`: Enable/disable auto-backup (future)
* `windsurf-chat-backup.backupInterval`: Auto-backup interval in minutes (future)

## Release Notes

### 1.0.0

Initial release:
- One-click backup command
- Keyboard shortcut support
- Command palette integration
- Auto-save to Downloads

## For More Information

* [GitHub Repository](https://github.com/aimarketingflow/windsurf-privacy-toolkit-v3)
* [Documentation](../MANUAL_BACKUP_GUIDE.md)

**Enjoy backing up your chats!** 💾
