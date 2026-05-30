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
    console.log("=== TRANSCRIPT STEPS 3500 - 3575 ===");
    for await (const line of rl) {
        index++;
        if (index < 3500 || index > 3575) continue;
        try {
            const step = JSON.parse(line);
            console.log(`\n[Step ${index}] Type: ${step.type} | Source: ${step.source}`);
            if (step.content) {
                console.log(step.content.substring(0, 500));
            }
            if (step.tool_calls) {
                console.log("Tool calls:", JSON.stringify(step.tool_calls, null, 2));
            }
        } catch (e) {}
    }
}

search();
