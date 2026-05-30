const fs = require('fs');
const content = fs.readFileSync('js/app.js', 'utf8');

const keys = [
    'elektrik_proj_1_title',
    'elektrik_proj_2_title',
    'elektrik_proj_3_title',
    'elektrik_proj_4_title',
    'elektrik_proj_tag_infra',
    'elektrik_proj_tag_solar',
    'elektrik_proj_tag_ind',
    'elektrik_proj_tag_comm'
];

keys.forEach(target => {
    let pos = 0;
    let count = 0;
    while ((pos = content.indexOf(target, pos)) !== -1) {
        count++;
        pos += target.length;
    }
    console.log(`Key '${target}': ${count} occurrences`);
});
