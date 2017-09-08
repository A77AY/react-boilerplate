const path = require('path');
const Structure = require('./parts/Structure');
const structureToPaths = require('./utils/structureToPaths');
const urlStringToUrlConstantObject = require('./utils/urlStringToUrlConstantObject');

const ROOT = process.cwd() || path.join(__dirname, '..');

const App = {
    Structure: Structure,
    Paths: structureToPaths(Structure, ROOT),
    Server: urlStringToUrlConstantObject('http://localhost:80'),
    DevelopmentServer: urlStringToUrlConstantObject('http://localhost:8888')
};

module.exports = App;