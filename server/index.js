const express = require('express'),
      http    = require('http'),
      html    = require('./html'),
      config  = require('../config.json');

const app    = express(),
      server = http.Server(app);

app.use(express.static('web'));

app.get(/^[^.]*$/, (req, res) => res.set('Content-Type', 'text/html').send(html));

server.listen(process.env.PORT || config.proxyPort);
