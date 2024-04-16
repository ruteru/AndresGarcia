const fs = require('fs');

// Read the resume.json file
const resumeData = require('./resume.json');

// Extract the name from resume.json
const name = resumeData.name;

// Read the manifest.json file
const manifestPath = './public/manifest.json';
const manifest = require(manifestPath);

// Update the short_name field with the extracted name
manifest.short_name = name;

// Write the updated manifest back to the file
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
