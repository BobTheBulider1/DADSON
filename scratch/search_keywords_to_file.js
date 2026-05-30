const fs = require('fs');
const readline = require('readline');

const transcriptPath = 'C:/Users/İbrahim MATARMAVI/.gemini/antigravity/brain/b4757362-a0a4-472c-bcaf-aa0c8ae43091/.system_generated/logs/transcript.jsonl';
const outPath = 'scratch/keyword_matches.txt';

async function search() {
    const fileStream = fs.createReadStream(transcriptPath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    let index = 0;
    const keywords = ['bursa', 'antalya', 'hastane', 'metro', 'fluke', 'ansan', 'ges', 'yda', 'denetim'];
    let matches = [];
    
    for await (const line of rl) {
        index++;
        const lowerLine = line.toLowerCase();
        if (keywords.some(k => lowerLine.includes(k))) {
            try {
                const step = JSON.parse(line);
                let content = step.content || '';
                let matchStr = `\n--- STEP ${index} (Type: ${step.type} | Source: ${step.source}) ---\n`;
                if (content.length > 2000) {
                    matchStr += content.substring(0, 2000) + '... [TRUNCATED CONTENT]\n';
                } else {
                    matchStr += content + '\n';
                }
                if (step.tool_calls) {
                    matchStr += "Tool calls: " + JSON.stringify(step.tool_calls, null, 2) + '\n';
                }
                matches.push(matchStr);
            } catch (e) {
                // Ignore parse errors on partial lines
            }
        }
    }
    
    fs.writeFileSync(outPath, matches.join('\n'), 'utf8');
    console.log(`Saved ${matches.length} matches to ${outPath}`);
}
search();
