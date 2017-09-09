const path = require('path');
const fs = require('fs');

module.exports = function getNodeModules(nodeModulesPath) {
    const nodeModules = {};
    fs.readdirSync(nodeModulesPath)
        .filter(x => {
            return ['.bin', '.tmp'].indexOf(x) === -1;
        })
        .forEach((mod) => {
            nodeModules[mod] = `commonjs ${mod}`;
        });
    return nodeModules;
};