#!/bin/bash

# Windsurf Chat Backup Toolkit - Installer
# Automatically sets up all backup methods

set -e

echo "💾 Windsurf Chat Backup Toolkit - Installer"
echo "==========================================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

echo -e "${BLUE}📦 Installing Windsurf Chat Backup Toolkit...${NC}"
echo ""

# Step 1: Create desktop shortcuts
echo -e "${BLUE}Step 1: Creating desktop shortcuts...${NC}"

# Manual backup shortcut
cat > ~/Desktop/"💾 Backup Windsurf Chats.command" << EOF
#!/bin/bash
cd "$SCRIPT_DIR"
./scripts/desktop-launcher.sh
EOF

chmod +x ~/Desktop/"💾 Backup Windsurf Chats.command"
echo -e "${GREEN}✅ Desktop shortcut created${NC}"

# Step 2: Check for Windsurf
echo ""
echo -e "${BLUE}Step 2: Checking for Windsurf...${NC}"

if [ -d "/Applications/Windsurf.app" ]; then
    echo -e "${GREEN}✅ Windsurf found${NC}"
else
    echo -e "${YELLOW}⚠️  Windsurf not found at /Applications/Windsurf.app${NC}"
    echo "   Please install Windsurf first"
fi

# Step 3: Extension installation instructions
echo ""
echo -e "${BLUE}Step 3: Extension installation${NC}"
echo ""
echo "To install the Windsurf extension:"
echo "1. Open Windsurf"
echo "2. Press Cmd+Shift+P"
echo "3. Type: 'Developer: Install Extension from Location'"
echo "4. Navigate to: $SCRIPT_DIR/extension/"
echo "5. Select the folder and reload"
echo ""
echo "After installation, press Cmd+Shift+B to backup!"
echo ""

# Step 4: Create config directory
echo -e "${BLUE}Step 4: Creating config directory...${NC}"
mkdir -p ~/.windsurf-chat-backup
echo "INSTALL_DATE=$(date)" > ~/.windsurf-chat-backup/config
echo -e "${GREEN}✅ Config directory created${NC}"

# Step 5: Summary
echo ""
echo "=========================================="
echo -e "${GREEN}✅ Installation Complete!${NC}"
echo "=========================================="
echo ""
echo "📋 What was installed:"
echo "   ✅ Desktop shortcut: ~/Desktop/💾 Backup Windsurf Chats.command"
echo "   ✅ Config directory: ~/.windsurf-chat-backup/"
echo "   ✅ Scripts ready in: $SCRIPT_DIR"
echo ""
echo "🚀 Next Steps:"
echo "   1. Install the extension (see instructions above)"
echo "   2. Double-click the desktop icon to test"
echo "   3. Press Cmd+Shift+B in Windsurf to backup"
echo ""
echo "📖 Documentation:"
echo "   Open: $SCRIPT_DIR/docs/guide.html"
echo ""
echo "🎊 You're all set! Happy backing up!"
echo ""

# Open the guide
read -p "Open the user guide now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    open "$SCRIPT_DIR/docs/guide.html"
fi
