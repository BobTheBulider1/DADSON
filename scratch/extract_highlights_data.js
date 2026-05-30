const fs = require('fs');
const path = require('path');

const brainScratchDir = 'C:/Users/İbrahim MATARMAVI/.gemini/antigravity/brain/b4757362-a0a4-472c-bcaf-aa0c8ae43091/scratch';
const files = fs.readdirSync(brainScratchDir);

console.log("=== SIMPLE KEYWORD SEARCH IN SCRATCH TXT FILES ===");

const keywords = ['ges', 'aydınlatma', 'otomasyon', 'taahhüt', 'bursa', 'demirbaş', 'özel', 'villa', 'otel', 'fabrika', 'şantiye', 'metro', 'hastane', 'antalya', 'yda', 'çatı', 'akıllı', 'temel', 'topraklama', 'proje', 'projects', 'highlight'];

files.forEach(file => {
    if (file.endsWith('.txt') || file.endsWith('.js') || file.endsWith('.json')) {
        const filepath = path.join(brainScratchDir, file);
        const content = fs.readFileSync(filepath, 'utf8');
        
        keywords.forEach(kw => {
            let idx = 0;
            let count = 0;
            while ((idx = content.indexOf(kw, idx)) !== -1) {
                count++;
                idx += kw.length;
            }
            if (count > 0 && file.startsWith('script_')) {
                console.log(`File: ${file} contains "${kw}" ${count} times.`);
            }
        });
    }
});
