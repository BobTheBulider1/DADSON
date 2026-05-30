const fs = require('fs');
const path = require('path');

const stepsDir = 'C:/Users/İbrahim MATARMAVI/.gemini/antigravity/brain/b4757362-a0a4-472c-bcaf-aa0c8ae43091/.system_generated/steps';

console.log("=== SEARCHING ALL STEPS FOR BURSA METRO ===");

function scanDir(dir) {
    if (!fs.existsSync(dir)) return;
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullpath = path.join(dir, item);
        const stat = fs.statSync(fullpath);
        if (stat.isDirectory()) {
            scanDir(fullpath);
        } else if (item.endsWith('.md') || item.endsWith('.jsonl') || item.endsWith('.log')) {
            const content = fs.readFileSync(fullpath, 'utf8');
            if (content.toLowerCase().includes('bursa metro')) {
                console.log(`Match in file: ${fullpath}`);
                // Print a small snippet
                const idx = content.toLowerCase().indexOf('bursa metro');
                console.log(content.substring(Math.max(0, idx - 100), Math.min(content.length, idx + 200)).replace(/\s+/g, ' ').trim());
                console.log("------------------------");
            }
        }
    });
}

scanDir(stepsDir);
