#!/bin/bash

# Manual Chat Backup - Run whenever you want to backup
# No automation, no intervals - just one-time capture

echo "💾 Windsurf Manual Chat Backup"
echo "=============================="
echo ""

# Check if Windsurf is running
if ! pgrep -x "Windsurf" > /dev/null; then
    echo "❌ Windsurf is not running"
    echo ""
    echo "Please start Windsurf first, then run this again."
    echo ""
    read -p "Press any key to close..."
    exit 1
fi

echo "✅ Windsurf is running"
echo ""

# Read the manual backup script
# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SCRIPT_FILE="$SCRIPT_DIR/manual-backup.js"

if [ ! -f "$SCRIPT_FILE" ]; then
    echo "❌ Script file not found: $SCRIPT_FILE"
    exit 1
fi

echo "📋 Copying backup script to clipboard..."
cat "$SCRIPT_FILE" | pbcopy
echo "   ✅ Script copied!"
echo ""

echo "🎯 Bringing Windsurf to front..."
osascript -e 'tell application "Windsurf" to activate' 2>&1
sleep 1

echo ""
echo "🎯 Opening DevTools..."
osascript <<EOF 2>&1
tell application "System Events"
    tell process "Windsurf"
        keystroke "i" using {command down, option down}
    end tell
end tell
EOF
sleep 3

echo ""
echo "🎯 Closing any popups..."
osascript <<EOF 2>&1
tell application "System Events"
    tell process "Windsurf"
        keystroke (ASCII character 27)
        delay 0.5
        keystroke (ASCII character 27)
    end tell
end tell
EOF
sleep 1

echo ""
echo "🎯 Pasting backup script..."
osascript <<EOF 2>&1
tell application "System Events"
    tell process "Windsurf"
        keystroke "v" using {command down}
    end tell
end tell
EOF
sleep 1

echo ""
echo "🎯 Executing backup..."
osascript <<EOF 2>&1
tell application "System Events"
    tell process "Windsurf"
        keystroke return
    end tell
end tell
EOF
sleep 2

echo ""
echo "🎯 Closing DevTools..."
osascript <<EOF 2>&1
tell application "System Events"
    tell process "Windsurf"
        keystroke "i" using {command down, option down}
    end tell
end tell
EOF

echo ""
echo "✅ Backup complete!"
echo ""
echo "📁 Check ~/Downloads/ for:"
echo "   windsurf_MANUAL_BACKUP_*.json"
echo ""
ls -lt ~/Downloads/windsurf_MANUAL_BACKUP_*.json 2>/dev/null | head -3 || echo "   (Files will appear after backup completes)"
echo ""
echo "💡 To run another backup:"
echo "   Just double-click this icon again!"
echo ""
echo "🔍 To verify:"
echo "   Open DevTools and run: captureAllChatsNow()"
echo ""
read -p "Press any key to close..."
