const fs = require('fs');

const content = fs.readFileSync('js/app.js', 'utf8');

const keys = [
    'elektrik_proj_1_title',
    'elektrik_proj_1_desc',
    'elektrik_proj_2_title',
    'elektrik_proj_2_desc',
    'elektrik_proj_3_title',
    'elektrik_proj_3_desc',
    'elektrik_proj_4_title',
    'elektrik_proj_4_desc'
];

console.log("=== SEARCHING KEYS IN js/app.js ===");
keys.forEach(key => {
    let pos = 0;
    let count = 0;
    while ((pos = content.indexOf(key, pos)) !== -1) {
        count++;
        // Get line content
        const lineStart = content.lastIndexOf('\n', pos) + 1;
        const lineEnd = content.indexOf('\n', pos);
        const line = content.substring(lineStart, lineEnd).trim();
        console.log(`Key: ${key} (Occur: ${count})`);
        console.log(`Line: ${line}`);
        console.log("------------------------");
        pos += key.length;
    }
    if (count === 0) {
        console.log(`Key: ${key} -> NOT FOUND ANYWHERE!`);
        console.log("------------------------");
    }
});
