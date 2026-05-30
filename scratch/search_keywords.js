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
    const keywords = ['bursa', 'antalya', 'hastane', 'metro', 'fluke', 'ansan', 'ges', 'yda', 'denetim'];
    
    for await (const line of rl) {
        index++;
        const lowerLine = line.toLowerCase();
        if (keywords.some(k => lowerLine.includes(k))) {
            try {
                const step = JSON.parse(line);
                console.log(`\n--- STEP ${index} ---`);
                console.log(`Type: ${step.type} | Source: ${step.source}`);
                let content = step.content || '';
                // If content is very long, print a snippet
                if (content.length > 1000) {
                    console.log(content.substring(0, 1000) + '... [TRUNCATED]');
                } else {
                    console.log(content);
                }
                if (step.tool_calls) {
                    console.log("Tool calls:", JSON.stringify(step.tool_calls, null, 2));
                }
            } catch (e) {
                // Ignore parsing errors on partial lines
            }
        }
    }
}
search();
