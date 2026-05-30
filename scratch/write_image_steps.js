const fs = require('fs');
const readline = require('readline');

const transcriptPath = 'C:/Users/İbrahim MATARMAVI/.gemini/antigravity/brain/b4757362-a0a4-472c-bcaf-aa0c8ae43091/.system_generated/logs/transcript.jsonl';
const outPath = 'scratch/image_steps.txt';

async function search() {
    const fileStream = fs.createReadStream(transcriptPath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let index = 0;
    let matches = [];
    for await (const line of rl) {
        index++;
        if (index >= 3340 && index <= 3370) {
            try {
                const step = JSON.parse(line);
                let matchStr = `\n--- STEP ${index} (Type: ${step.type} | Source: ${step.source}) ---\n`;
                if (step.content) {
                    matchStr += step.content + '\n';
                }
                if (step.tool_calls) {
                    matchStr += "Tool calls: " + JSON.stringify(step.tool_calls, null, 2) + '\n';
                }
                matches.push(matchStr);
            } catch (e) {}
        }
    }
    fs.writeFileSync(outPath, matches.join('\n'), 'utf8');
    console.log(`Saved ${matches.length} matches to ${outPath}`);
}
search();
