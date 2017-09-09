import React from 'react'
import Helmet from 'react-helmet'

const App = require('../../../cfg/App');

export default () => {
    const scriptPath = `${App.DevelopmentServer.URL}/${App.Structure.PUB}/${App.Structure.Pub.JS}/client.js`;
    const head = Helmet.rewind();
    return (
        <html {...head.htmlAttributes.toComponent()}>
        <head>
            {head.base.toComponent()}
            {head.meta.toComponent()}
            {head.title.toComponent()}
            {head.link.toComponent()}
            {head.style.toComponent()}
            {head.script.toComponent()}
            {head.noscript.toComponent()}
        </head>
        <body>
        <div id='app'/>
        <script src={scriptPath}/>
        </body>
        </html>
    )
};