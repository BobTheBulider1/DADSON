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
    for await (const line of rl) {
        index++;
        if (index >= 3579 && index <= 3584) {
            try {
                const step = JSON.parse(line);
                console.log(`\n--- STEP ${index} (Type: ${step.type} | Source: ${step.source}) ---`);
                if (step.content) {
                    console.log(step.content.substring(0, 1500));
                }
            } catch (e) {}
        }
    }
}

search();
