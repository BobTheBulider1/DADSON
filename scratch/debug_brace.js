const fs = require('fs');
const jsPath = 'js/app.js';
let content = fs.readFileSync(jsPath, 'utf8');

const startIdx = content.indexOf(`tr: {`);
const endIdx = content.indexOf(`en:`, startIdx + 5);
console.log("startIdx:", startIdx, "endIdx:", endIdx);
let blockContent = content.substring(startIdx, endIdx);
console.log("blockContent length:", blockContent.length);
console.log("blockContent last 100 chars:", JSON.stringify(blockContent.substring(blockContent.length - 100)));
