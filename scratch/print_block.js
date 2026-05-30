const fs = require('fs');
const jsPath = 'js/app.js';
let content = fs.readFileSync(jsPath, 'utf8');

const startStr = 'tr: {';
const startIdx = content.indexOf(startStr);
const nextLangs = ['en:', 'ar:', 'ka:', 'ru:', 'fr:', 'it:', '};'];

console.log("startIdx:", startIdx);
for (const nextLang of nextLangs) {
    const idx = content.indexOf(nextLang, startIdx + startStr.length);
    if (idx !== -1) {
        console.log(`Matched nextLang: "${nextLang}" at index: ${idx} (relative to startStr: ${idx - startIdx})`);
        console.log("Snippet at match:", JSON.stringify(content.substring(idx - 20, idx + 20)));
    }
}
