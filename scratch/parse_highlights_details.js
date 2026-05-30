const fs = require('fs');

const content = fs.readFileSync('C:/Users/İbrahim MATARMAVI/.gemini/antigravity/brain/b4757362-a0a4-472c-bcaf-aa0c8ae43091/.system_generated/steps/3141/content.md', 'utf8');

console.log("=== PARSING HIGHLIGHTS OR REELS FROM HTML ===");
// Find all occurrences of the word "highlight" or "reel" inside JSON structures
const regex = /"node":\s*\{"id":"[^"]+","owner":\{[^}]+\},"title":"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    console.log("Highlight Title Match:", match[1]);
}

// Let's also print lines containing "cover_media" or "highlight_reels"
const lines = content.split('\n');
lines.forEach((line, i) => {
    if (line.includes('highlight') && line.length < 2000) {
        console.log(`Line ${i}: ${line.trim()}`);
    }
});
