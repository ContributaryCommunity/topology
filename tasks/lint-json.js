const cp = require('child_process');
const fs = require('fs');
const path = require('path');
const srcDir = path.join(__dirname, '..', 'src');

const srcFiles = fs.readdirSync(srcDir).filter((file) => {
  const filePathSplitArray = file.split('.');

  return filePathSplitArray[filePathSplitArray.length - 1] === 'json';
});

srcFiles.forEach((file) => {
  const filePath = `${srcDir}/${file}`;
  const nodePath = path.join(__dirname, '..', 'node_modules/.bin/jsonlint');

  cp.execSync(`${nodePath} ${filePath}`);
});