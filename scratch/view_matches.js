const fs = require('fs');
const matches = JSON.parse(fs.readFileSync('scratch/brain_search_results.txt', 'utf8'));

const filtered = matches.filter(m => !m.file.includes('.json'));

console.log(`Filtered to ${filtered.length} matches:`);
filtered.forEach(m => {
    console.log(`[${m.file}:${m.line}] (Keyword: ${m.keyword}) -> ${m.content}`);
});
