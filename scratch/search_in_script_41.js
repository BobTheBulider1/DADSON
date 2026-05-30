const fs = require('fs');
const path = require('path');

const brainScratchDir = 'C:/Users/İbrahim MATARMAVI/.gemini/antigravity/brain/b4757362-a0a4-472c-bcaf-aa0c8ae43091/scratch';

function searchInFile(filename, keywords) {
    console.log(`\n=== SEARCHING IN ${filename} ===`);
    const filepath = path.join(brainScratchDir, filename);
    if (!fs.existsSync(filepath)) {
        console.log("File not found:", filename);
        return;
    }
    const content = fs.readFileSync(filepath, 'utf8');
    
    keywords.forEach(kw => {
        let pos = 0;
        console.log(`\nMatches for keyword: ${kw}`);
        while ((pos = content.indexOf(kw, pos)) !== -1) {
            const start = Math.max(0, pos - 150);
            const end = Math.min(content.length, pos + 250);
            const snippet = content.substring(start, end).replace(/\s+/g, ' ').trim();
            console.log(`- Pos ${pos}: ${snippet}`);
            pos += kw.length;
        }
    });
}

searchInFile('script_41.txt', ['yda', 'highlight']);
searchInFile('script_77.txt', ['yda', 'highlight']);
