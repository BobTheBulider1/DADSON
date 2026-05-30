const fs = require('fs');
const jsPath = 'js/app.js';
let content = fs.readFileSync(jsPath, 'utf8');

const projectKeys = [
    'elektrik_proj_tag_infra',
    'elektrik_proj_1_title',
    'elektrik_proj_1_desc',
    'elektrik_proj_tag_solar',
    'elektrik_proj_2_title',
    'elektrik_proj_2_desc',
    'elektrik_proj_tag_ind',
    'elektrik_proj_3_title',
    'elektrik_proj_3_desc',
    'elektrik_proj_tag_comm',
    'elektrik_proj_4_title',
    'elektrik_proj_4_desc'
];

const startStr = 'tr: {';
const startIdx = content.indexOf(startStr);
const nextLangs = ['en:', 'ar:', 'ka:', 'ru:', 'fr:', 'it:', '};'];
let endIdx = content.length;
for (const nextLang of nextLangs) {
    const idx = content.indexOf(nextLang, startIdx + startStr.length);
    if (idx !== -1 && idx < endIdx) {
        endIdx = idx;
    }
}

let blockContent = content.substring(startIdx, endIdx);
let lines = blockContent.split('\n');
let filteredLines = lines.filter(line => {
    return !projectKeys.some(key => line.includes(`${key}:`));
});

let cleanBlock = filteredLines.join('\n');
console.log("cleanBlock length:", cleanBlock.length);
let lastBraceIdx = cleanBlock.lastIndexOf('}');
console.log("lastBraceIdx:", lastBraceIdx);
if (lastBraceIdx !== -1) {
    console.log("Around last brace:", JSON.stringify(cleanBlock.substring(lastBraceIdx - 50, lastBraceIdx + 50)));
}
