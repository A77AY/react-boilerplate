import express from 'express';
const App = require('../../cfg');

const app = express.Router();

app.get('*', (req, res, next) => {
    res.send(`<!DOCTYPE html>
    <html>
    <head>
    <title>Test</title>
    </head>
    <body>
    <div id='app'></div>
    <script src="${App.DevelopmentServer.URL}/${App.Structure.PUB}/${App.Structure.Pub.JS}/client.js"></script>
    </body>
    </html>`);
});

export default app;