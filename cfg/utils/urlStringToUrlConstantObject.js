const {URL} = require('url');

module.exports = function urlStrinToUrlConstantObject(url) {
    const server = new URL(url);
    return {
        URL: server.origin,
        PROTOCOL: server.protocol,
        HOST: server.hostname,
        PORT: server.port || 80
    };
};