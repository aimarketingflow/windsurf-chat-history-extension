/**
 * Windsurf Chat Extractor - MANUAL/ON-DEMAND VERSION
 * Run this whenever you want to backup your chats
 * No auto-capture, no intervals - just one-time capture
 * 
 * SECURITY: Your data, your machine, 100% local
 */

console.log('🎯 Windsurf Chat Extractor - MANUAL MODE');
console.log('📊 One-time capture of all visible chats');
console.log('');

// Extract from ALL iframes (multiple chat windows)
function captureAllChatsNow() {
    const timestamp = new Date().toISOString();
    const allChats = [];
    
    try {
        // Find ALL iframes
        const iframes = document.querySelectorAll('iframe');
        console.log(`🔍 Found ${iframes.length} iframes`);
        
        iframes.forEach((iframe, index) => {
            try {
                const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                const text = iframeDoc.body.innerText || iframeDoc.body.textContent;
                
                if (text && text.length > 100) {
                    const chatId = `chat_${index}`;
                    
                    allChats.push({
                        chatId: chatId,
                        iframeIndex: index,
                        content: text,
                        length: text.length,
                        timestamp: timestamp,
                        captured: new Date().toLocaleString()
                    });
                    
                    console.log(`✅ Captured iframe[${index}]: ${text.length} characters`);
                }
            } catch (e) {
                console.log(`⚠️  Cannot access iframe ${index}:`, e.message);
            }
        });
        
        // Also check for chat panels in main document
        const chatSelectors = [
            '[class*="chat"]',
            '[class*="cascade"]',
            '[class*="conversation"]',
            '[role="log"]'
        ];
        
        chatSelectors.forEach(selector => {
            try {
                const elements = document.querySelectorAll(selector);
                elements.forEach((el, idx) => {
                    const text = el.innerText || el.textContent;
                    if (text && text.length > 100) {
                        const chatId = `dom_${selector}_${idx}`;
                        
                        allChats.push({
                            chatId: chatId,
                            source: 'DOM',
                            selector: selector,
                            content: text,
                            length: text.length,
                            timestamp: timestamp,
                            captured: new Date().toLocaleString()
                        });
                        
                        console.log(`✅ Captured ${selector}[${idx}]: ${text.length} characters`);
                    }
                });
            } catch (e) {
                // Selector failed
            }
        });
        
    } catch (e) {
        console.log('❌ Error extracting chats:', e.message);
    }
    
    if (allChats.length > 0) {
        console.log('');
        console.log(`📊 Captured ${allChats.length} chat windows`);
        console.log('');
        
        // Save immediately
        const data = {
            captureTime: timestamp,
            capturedReadable: new Date().toLocaleString(),
            totalChats: allChats.length,
            chats: allChats
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `windsurf_MANUAL_BACKUP_${Date.now()}.json`;
        a.click();
        
        console.log('💾 Backup saved!');
        console.log(`   File: windsurf_MANUAL_BACKUP_${Date.now()}.json`);
        console.log(`   Location: ~/Downloads/`);
        console.log(`   Total chats: ${allChats.length}`);
        console.log('');
        
        return data;
    } else {
        console.log('⚠️  No chat content found');
        console.log('');
        console.log('💡 Tips:');
        console.log('   - Make sure you have chat windows open');
        console.log('   - Try opening the chat panel/sidebar');
        console.log('   - Check if chats are in iframes');
        return null;
    }
}

// Show current chat windows
function showAvailableChats() {
    console.log('');
    console.log('🔍 Available Chat Windows:');
    
    const iframes = document.querySelectorAll('iframe');
    console.log(`   Found ${iframes.length} iframes`);
    
    iframes.forEach((iframe, index) => {
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            const text = iframeDoc.body.innerText || iframeDoc.body.textContent;
            console.log(`   iframe[${index}]: ${text.length} characters`);
        } catch (e) {
            console.log(`   iframe[${index}]: Cannot access`);
        }
    });
    console.log('');
}

// Capture specific chat by index
function captureSpecificChat(iframeIndex) {
    const iframes = document.querySelectorAll('iframe');
    if (iframeIndex >= iframes.length) {
        console.log(`❌ No iframe at index ${iframeIndex}`);
        return null;
    }
    
    try {
        const iframe = iframes[iframeIndex];
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        const text = iframeDoc.body.innerText || iframeDoc.body.textContent;
        
        const data = {
            captureTime: new Date().toISOString(),
            capturedReadable: new Date().toLocaleString(),
            chatId: `chat_${iframeIndex}`,
            iframeIndex: iframeIndex,
            content: text,
            length: text.length
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `windsurf_CHAT_${iframeIndex}_${Date.now()}.json`;
        a.click();
        
        console.log(`✅ Captured iframe[${iframeIndex}]:`);
        console.log(`   Characters: ${text.length}`);
        console.log(`   File: windsurf_CHAT_${iframeIndex}_${Date.now()}.json`);
        
        return data;
    } catch (e) {
        console.log(`❌ Cannot access iframe[${iframeIndex}]:`, e.message);
        return null;
    }
}

// Run capture immediately
console.log('🚀 Capturing all visible chats...');
console.log('');
captureAllChatsNow();

console.log('');
console.log('✅ MANUAL BACKUP COMPLETE!');
console.log('');
console.log('💡 Available Commands:');
console.log('  captureAllChatsNow()        - Capture all chats again');
console.log('  showAvailableChats()        - See what chats are available');
console.log('  captureSpecificChat(0)      - Capture specific chat by index');
console.log('');
console.log('📁 All backups saved to: ~/Downloads/');
console.log('');
console.log('🎊 Done! Run captureAllChatsNow() whenever you want another backup.');
