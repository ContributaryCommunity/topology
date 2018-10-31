const path = require('path');
const srcDir = path.join(__dirname, '..', 'src');
const outputDir = path.join(__dirname, '..', 'data');
const fs = require('fs');
const isProduction = process.env.NODE_ENV === 'production';

// expose handler for Lambda
exports.run = run;

// for local development
if (!isProduction) {
  run();
}

function getTopologyFiles() {
  return fs.readdirSync(srcDir).filter((file) => {
    const filePathSplitArray = file.split('.');
  
    return filePathSplitArray[filePathSplitArray.length - 1] === 'json';
  });
}

function generateTopologyFromFiles(files) {
  const topology = {};

  files.forEach((file) => {
    const data = require(path.join(srcDir, file));
    const langaugeHierachy = filePathSplitArray = file.split('.');

    topology[langaugeHierachy[0]] = data;
  });

  return {
    language: {
      ...topology
    }
  };
}

function writeTopologyToFile(topologyObj) {
  const filePath = `${outputDir}/topology.json`;

  fs.writeFileSync(`${filePath}`, JSON.stringify(topologyObj, null, 2), (err) => {
    if (err) {
      return console.error(err);
    }
    
    console.log('File ${filePath} was saved!');
  }); 
}

function run() {
  const topologyFiles = getTopologyFiles();
  const topology = generateTopologyFromFiles(topologyFiles);

  writeTopologyToFile(topology);
}