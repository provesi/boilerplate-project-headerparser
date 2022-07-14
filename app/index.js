// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();
var cors = require('cors');

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('./public'));

app.use('/', require('../app/routes/route.inicial'));

module.exports = app;