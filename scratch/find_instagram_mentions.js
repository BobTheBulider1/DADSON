const fs = require('fs');
const readline = require('readline');

const transcriptPath = 'C:/Users/İbrahim MATARMAVI/.gemini/antigravity/brain/b4757362-a0a4-472c-bcaf-aa0c8ae43091/.system_generated/logs/transcript.jsonl';

async function search() {
    const fileStream = fs.createReadStream(transcriptPath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let index = 0;
    console.log("=== SEARCHING TRANSCRIPT FOR BURSA METRO OR ANTALYA HASTANESI ===");
    for await (const line of rl) {
        index++;
        try {
            const step = JSON.parse(line);
            const content = step.content || '';
            const lowerContent = content.toLowerCase();
            
            if (lowerContent.includes('bursa metro') || lowerContent.includes('antalya şehir hastanesi') || lowerContent.includes('antalya city hospital')) {
                console.log(`\n--- STEP ${index} ---`);
                console.log(content.substring(0, 1000));
                console.log("------------------------");
            }
        } catch (e) {}
    }
}

search();
