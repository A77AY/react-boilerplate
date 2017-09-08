const path = require('path');

module.exports = function pathsFromStructure(structure, root) {
    const paths = {};
    for (let name in structure) {
        paths[name] = typeof structure[name] === 'object'
            ? pathsFromStructure(structure[name], path.join(root, structure[name.toUpperCase()]))
            : path.join(root, structure[name]);
    }
    return paths;
};