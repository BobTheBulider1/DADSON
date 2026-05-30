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
        if (line.includes('dadsonelektrik') && line.includes('instagram') && (line.includes('title') || line.includes('snippet') || line.includes('post') || line.includes('highlight') || line.includes('project'))) {
            try {
                const step = JSON.parse(line);
                let content = step.content || '';
                if (content.includes('Tarsus') || content.includes('YDA') || content.includes('Teknik') || content.includes('Hospital') || content.includes('Metro') || content.includes('grounding') || content.includes('Ansan')) {
                    console.log(`\n--- STEP ${index} (Type: ${step.type}) ---`);
                    console.log(content.substring(0, 1500));
                }
            } catch (e) {}
        }
    }
}
search();
