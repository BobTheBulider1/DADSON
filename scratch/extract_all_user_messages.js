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
    console.log("=== ALL USER MESSAGES ===");
    for await (const line of rl) {
        index++;
        try {
            const step = JSON.parse(line);
            if (step.source === 'USER_EXPLICIT' || step.type === 'USER_INPUT') {
                console.log(`\n[Step ${index}] USER:`);
                console.log(step.content);
                console.log("=========================================");
            }
        } catch (e) {}
    }
}

search();
