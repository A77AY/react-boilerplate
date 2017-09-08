require('babel-polyfill');
const express = require('express');
const App = require('../../cfg');
const routes = require('./routes.jsx');

const app = express();

app.use((...args) => routes(...args));

if (module.hot) {
    module.hot.accept('./routes', () => {
        System.import('./routes').then(routes => routes)
    });
}

app.listen(App.Server.PORT, App.Server.HOST, function () {
    console.log(`App listening on port ${App.Server.PORT}`)
});