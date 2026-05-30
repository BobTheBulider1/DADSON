const fs = require('fs');

const step3141Path = 'C:/Users/İbrahim MATARMAVI/.gemini/antigravity/brain/b4757362-a0a4-472c-bcaf-aa0c8ae43091/.system_generated/steps/3141/content.md';
const step1912Path = 'C:/Users/İbrahim MATARMAVI/.gemini/antigravity/brain/b4757362-a0a4-472c-bcaf-aa0c8ae43091/.system_generated/steps/1912/content.md';

function parseInsta(filePath) {
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }
    console.log(`\n=== PARSING ${filePath} ===`);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Find all JSON blocks and look for "accessibility_caption" or "text"
    const regex = /"text"\s*:\s*"([^"]+)"/g;
    let match;
    let count = 0;
    while ((match = regex.exec(content)) && count < 100) {
        const text = match[1];
        if (text.includes('proje') || text.includes('taahhüt') || text.includes('elektrik') || text.includes('Bursa') || text.includes('Antalya') || text.includes('GES')) {
            console.log(`Match ${count++}: ${text}`);
        }
    }
    
    // Also look for accessibility_caption
    const captionRegex = /"accessibility_caption"\s*:\s*"([^"]+)"/g;
    while ((match = captionRegex.exec(content)) && count < 100) {
        console.log(`Caption ${count++}: ${match[1]}`);
    }
}

parseInsta(step3141Path);
parseInsta(step1912Path);
