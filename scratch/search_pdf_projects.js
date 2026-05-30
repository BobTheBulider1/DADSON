const fs = require('fs');

const filepath = 'C:/Users/İbrahim MATARMAVI/.gemini/antigravity/brain/b4757362-a0a4-472c-bcaf-aa0c8ae43091/scratch/extracted_pdf_text.txt';
if (!fs.existsSync(filepath)) {
    console.log("File not found:", filepath);
    process.exit(1);
}

const content = fs.readFileSync(filepath, 'utf8');
console.log("File size:", content.length);

const keywords = ['proje', 'metro', 'hastane', 'ges', 'solar', 'aydınlatma', 'otomasyon', 'taahhüt', 'bursa', 'antalya', 'yda', 'çatı', 'akıllı', 'temel', 'topraklama', 'referans', 'işler', 'tamamlanan'];

const lines = content.split('\n');
console.log("Total lines:", lines.length);

const matchedLines = [];
lines.forEach((line, idx) => {
    const lower = line.toLowerCase();
    const matches = keywords.filter(kw => lower.includes(kw));
    if (matches.length >= 2) {
        matchedLines.push(`[Line ${idx}] (${matches.join(',')}) : ${line.trim()}`);
    }
});

console.log(`Found ${matchedLines.length} matched lines:`);
matchedLines.slice(0, 100).forEach(l => console.log(l));
