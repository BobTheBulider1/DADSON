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
let endIdx = content.indexOf('en:', startIdx + 5);

let blockContent = content.substring(startIdx, endIdx);
let lines = blockContent.split('\n');
console.log("Original lines count:", lines.length);

let filteredLines = lines.filter(line => {
    return !projectKeys.some(key => line.includes(`${key}:`));
});
console.log("Filtered lines count:", filteredLines.length);
console.log("Filtered lines content first 10 lines:", filteredLines.slice(0, 10));
console.log("Filtered lines content last 10 lines:", filteredLines.slice(-10));
