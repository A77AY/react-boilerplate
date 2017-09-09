import React from 'react';
import express from 'express';
import {renderToString} from 'react-dom/server';
import Template from '../containers/Template/Template';

const App = require('../../cfg');

const app = express.Router();

app.get('*', (req, res, next) => {
    res.send('<!DOCTYPE html>' + renderToString(<Template/>));
});

export default app;