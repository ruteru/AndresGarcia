const fs = require('fs');
const resumeData = require('./src/data/resume.json');
const name = resumeData.name;
const manifestPath = './public/manifest.json';
const manifest = require(manifestPath);

manifest.short_name = name;

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
