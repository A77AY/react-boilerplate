import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import DevelopmentApp from '../containers/DevelopmentApp/DevelopmentApp';

const root = document.getElementById('app');

ReactDOM.render(<DevelopmentApp/>, root);

if (module.hot) {
    module.hot.accept('../containers/DevelopmentApp/DevelopmentApp', () => {
        ReactDOM.render(<DevelopmentApp/>, root);
    });
}