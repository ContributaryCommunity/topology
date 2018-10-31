const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');
const srcDir = path.join(__dirname, '..', 'src');
const nodeDir = path.join(__dirname, '..', 'node_modules/.bin/jsonlint');

const srcFiles = fs.readdirSync(srcDir).filter((file) => {
  const filePathSplitArray = file.split('.');

  return filePathSplitArray[filePathSplitArray.length - 1] === 'json';
});

// lint source files
srcFiles.forEach((file) => {
  const filePath = `${srcDir}/${file}`;

  cp.execSync(`${nodeDir} ${filePath}`);
});

// lint build output
cp.execSync(`${nodeDir} ${dataDir}/topology.json`);