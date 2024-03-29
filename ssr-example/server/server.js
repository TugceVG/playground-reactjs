import React from 'react';
import ReactDOMServer from 'react-dom/server';

import express from 'express';
import fs from 'fs';
import path from 'path';

import App from '../src/App';

const PORT = 8000;

const serverApp = express();

serverApp.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Some error happend on server");
        }

        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
                // `<div id="root">SOME TEXT !</div>`
            )
        );
    });
});

serverApp.use(express.static(path.resolve(__dirname, '..', 'build')));

serverApp.listen(PORT, () => {
    console.log(`App launched on ${PORT}`);
});