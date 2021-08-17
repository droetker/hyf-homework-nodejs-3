var express = require('express');
var app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.get('/users', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('[]');
});
var server = app.listen(port, hostname, () => {
    console.log('Hello World!');
})
