const express = require('express');
const App = require('../../cfg');
const routes = require('./routes.jsx');

const app = express();

app.use((...args) => routes(...args));

app.listen(App.Server.PORT, App.Server.HOST, function () {
    console.log(`App listening on port ${App.Server.PORT}`)
});