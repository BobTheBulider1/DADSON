const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/İbrahim MATARMAVI/.gemini/antigravity/brain/b4757362-a0a4-472c-bcaf-aa0c8ae43091';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (f !== 'node_modules' && f !== '.git' && f !== '.tempmediaStorage') {
                walkDir(dirPath, callback);
            }
        } else {
            callback(dirPath);
        }
    });
}

const keywords = ['antalya', 'bursa', 'hastane', 'metro', 'fluke', 'ansan', 'yda', 'taahhüt', 'ges'];
let matches = [];

walkDir(brainDir, (filePath) => {
    // Only search text/script files
    const ext = path.extname(filePath).toLowerCase();
    if (ext === '.txt' || ext === '.js' || ext === '.json' || ext === '.md') {
        const content = fs.readFileSync(filePath, 'utf8');
        const lowerContent = content.toLowerCase();
        
        keywords.forEach(keyword => {
            if (lowerContent.includes(keyword)) {
                // Find matching lines
                const lines = content.split('\n');
                lines.forEach((line, idx) => {
                    if (line.toLowerCase().includes(keyword)) {
                        matches.push({
                            file: path.relative(brainDir, filePath),
                            line: idx + 1,
                            keyword: keyword,
                            content: line.trim().substring(0, 150)
                        });
                    }
                });
            }
        });
    }
});

console.log(`Found ${matches.length} keyword matches in brain files.`);
// Output first 100 matches
matches.slice(0, 100).forEach(m => {
    console.log(`[${m.file}:${m.line}] (Keyword: ${m.keyword}) -> ${m.content}`);
});

// Save all to a file
fs.writeFileSync('scratch/brain_search_results.txt', JSON.stringify(matches, null, 2), 'utf8');
console.log("Full matches written to scratch/brain_search_results.txt");
