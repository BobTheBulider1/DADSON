const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

// A very basic HTML tag matcher to find mismatched tags
function checkTags(html) {
    const tagRegex = /<\/?([a-zA-Z0-9:-]+)(?:\s+[^>]*?)?>/g;
    const stack = [];
    const selfClosing = new Set([
        'img', 'input', 'br', 'hr', 'meta', 'link', 'source', 'polyline', 'rect', 'circle', 'polygon', 'path', 'line', 'defs', 'linearGradient', 'stop', 'svg'
    ]);
    
    let match;
    let lineNum = 1;
    let lastPos = 0;

    const getLineNum = (index) => {
        const textUpTo = html.substring(0, index);
        return textUpTo.split('\n').length;
    };

    while ((match = tagRegex.exec(html)) !== null) {
        const fullTag = match[0];
        const tagName = match[1].toLowerCase();
        const isClosing = fullTag.startsWith('</');
        const isSelfClosing = fullTag.endsWith('/>') || selfClosing.has(tagName);
        const currentLine = getLineNum(match.index);

        if (isSelfClosing) {
            continue;
        }

        if (!isClosing) {
            stack.push({ name: tagName, line: currentLine, full: fullTag });
        } else {
            if (stack.length === 0) {
                console.log(`Error: Closing tag </${tagName}> on line ${currentLine} has no opening tag.`);
                continue;
            }
            const last = stack.pop();
            if (last.name !== tagName) {
                console.log(`Error: Mismatched tag on line ${currentLine}. Expected </${last.name}> (opened on line ${last.line} with ${last.full}), but got ${fullTag}.`);
                // Push back to try to recover
                stack.push(last);
            }
        }
    }

    if (stack.length > 0) {
        console.log(`Error: Unclosed tags remaining:`);
        stack.forEach(tag => {
            console.log(`- <${tag.name}> opened on line ${tag.line} (${tag.full})`);
        });
    } else {
        console.log("Success: No tag mismatch found using basic check!");
    }
}

checkTags(html);
