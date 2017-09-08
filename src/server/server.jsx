const express = require('express');
const App = require('../../cfg/index');

const app = express();

app.get('/', function (req, res) {
    res.send(`<!DOCTYPE html>
    <html>
    <head>
    <title>Тест</title>
    </head>
    <body>
    <div id='app'/>
    <script src="${App.DevelopmentServer.URL}/${App.Structure.PUB}/${App.Structure.Pub.JS}/client.js"></script>
    </body>
    </html>`);
});

app.listen(App.Server.PORT, App.Server.HOST, function () {
    console.log('Server started')
});