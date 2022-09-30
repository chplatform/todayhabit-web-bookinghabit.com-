const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const option = {
  key: fs.readFileSync('./config/www_bookinghabit.com.key.pem'),
  cert: fs.readFileSync('./config/www_bookinghabit_com_cert.crt.pem'),
  ca: fs.readFileSync('./config/www_bookinghabit_com_chain_cert.crt.pem'),
};
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.all('*', (req, res, next) => {
  console.log('req.secure == ' + req.secure);
  var protocol = req.headers['x-forwarded-proto'] || req.protocol;
  if (protocol == 'https') {
    next();
  } else {
    var domain = req.hostname;
    console.log(domain, req.url);
    res.redirect('https://' + domain + req.url);
  }
});
app.use(express.static(path.join(__dirname, '../web/build/')));

app.get('/sitemap.xml', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../web/build/sitemap.xml'));
});
app.get('/robots.txt', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../web/build/robots.txt'));
});
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../web/build/index.html'));
});

http.createServer(option, app).listen(8080, function () {
  console.log('Https server listening on port ' + 8080);
});
app.use(function (req, res, next) {
  res.status(404).send('Sorry cant find that!');
});
