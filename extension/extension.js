const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const os = require('os');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
    console.log('Windsurf Chat Backup extension is now active!');

    // Register backup command
    let backupNow = vscode.commands.registerCommand('windsurf-chat-backup.backupNow', async function () {
        await backupChats(false);
    });

    let backupAll = vscode.commands.registerCommand('windsurf-chat-backup.backupAllChats', async function () {
        await backupChats(true);
    });

    context.subscriptions.push(backupNow);
    context.subscriptions.push(backupAll);

    // Show welcome message
    vscode.window.showInformationMessage('💾 Chat Backup extension loaded! Press Cmd+Shift+B to backup.');
}

async function backupChats(captureAll) {
    try {
        vscode.window.showInformationMessage('💾 Starting chat backup...');

        // Read the backup script from extension directory
        const scriptPath = path.join(
            context.extensionPath,
            '..',
            'scripts',
            'manual-backup.js'
        );

        if (!fs.existsSync(scriptPath)) {
            vscode.window.showErrorMessage('❌ Backup script not found at: ' + scriptPath);
            return;
        }

        const script = fs.readFileSync(scriptPath, 'utf8');

        // Execute the backup via terminal
        const terminal = vscode.window.createTerminal({
            name: 'Chat Backup',
            hideFromUser: false
        });

        // Show the terminal briefly
        terminal.show(true);

        // Create a temp script that opens DevTools and runs the backup
        const tempScript = `
osascript <<EOF
tell application "System Events"
    tell process "Windsurf"
        -- Open DevTools
        keystroke "i" using {command down, option down}
        delay 2
        
        -- Close any popups
        keystroke (ASCII character 27)
        delay 0.5
        
        -- The script is already in clipboard from the extension
        keystroke "v" using {command down}
        delay 1
        
        -- Execute
        keystroke return
        delay 2
        
        -- Close DevTools
        keystroke "i" using {command down, option down}
    end tell
end tell
EOF
`;

        // Copy script to clipboard
        const { exec } = require('child_process');
        exec(`echo '${script.replace(/'/g, "'\\''")}' | pbcopy`, (error) => {
            if (error) {
                vscode.window.showErrorMessage('❌ Failed to copy script to clipboard');
                return;
            }

            // Run the AppleScript
            exec(tempScript, (error, stdout, stderr) => {
                if (error) {
                    vscode.window.showErrorMessage('❌ Backup failed: ' + error.message);
                    return;
                }

                vscode.window.showInformationMessage('✅ Chat backup complete! Check ~/Downloads/');
                
                // Close the terminal after a delay
                setTimeout(() => {
                    terminal.dispose();
                }, 3000);
            });
        });

    } catch (error) {
        vscode.window.showErrorMessage('❌ Backup error: ' + error.message);
    }
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}
