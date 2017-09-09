import 'babel-polyfill'
import express from 'express'
import routes from './routes'

const App = require('../../cfg');

const app = express();

app.use((...args) => routes(...args));

if (module.hot) {
    module.hot.status(status => {
        switch (status) {
            case 'abort':
                process.send('restart');
                break;
        }
    });
    module.hot.accept('./routes', () => {
        System.import('./routes').then(routes => routes)
    });
}

app.listen(App.Server.PORT, App.Server.HOST, function () {
    console.log(`App listening on port ${App.Server.PORT}`)
});