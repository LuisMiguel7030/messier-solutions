import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

const port = 3000;
const app = express();

app.use(express.static('./dist'));
app.get('*', (req, res) => {
    res.send(`
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800" rel="stylesheet">
            <style>
                body {
                    font-family: 'Poppins', sans-serif;
                }
            </style>
            <title>Messier Solutions</title>   
        </head>
        <body>
            <div id="root"></div>
            <script src="/bundle.js"></script>
        <script type="text/javascript" src="bundle.js"></script></body>
        </html>
    `);
});

app.listen(port);
console.log(`Serving at http://localhost:${port}`);
