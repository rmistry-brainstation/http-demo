const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('*', (req, res) => {
  logSafeRequest(req);
  res.send(safeResponse(req));
});

app.post('*', (req, res) => {
  logUnsafeRequest(req);
  res.send(unsafeResponse(req));
});

app.put('*', (req, res) => {
  logUnsafeRequest(req);
  res.send(unsafeResponse(req));
});

app.patch('*', (req, res) => {
  logUnsafeRequest(req);
  res.send(unsafeResponse(req));
});

app.delete('*', (req, res) => {
  logUnsafeRequest(req);
  res.send(unsafeResponse(req));
});

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT || port}!`));

// Safe requests: GET, HEAD, OPTIONS
function logSafeRequest(req) {
  console.log('--------------------------------');
  console.log('|          NEW REQUEST          ');
  console.log('--------------------------------');
  console.log('Method: ', req.method);
  console.log('Path: ', req.path);
  console.log('Query: ', req.query);
  console.log('Hostname: ', req.hostname);
  console.log('IP: ', req.ip);
  console.log('Headers: ', req.headers);
  console.log('--------------------------------');
  console.log('');
}

function safeResponse(req) {
  return `Hello World! You made a GET request to '${req.path}' with the query params ${JSON.stringify(req.query)}`;
}

// Unsafe requests: POST, PUT, PATCH, DELETE, CONNECT, TRACE
function logUnsafeRequest(req) {
  console.log('--------------------------------');
  console.log('|          NEW REQUEST          ');
  console.log('--------------------------------');
  console.log('Method: ', req.method);
  console.log('Path: ', req.path);
  console.log('Body: ', req.body);
  console.log('Hostname: ', req.hostname);
  console.log('IP: ', req.ip);
  console.log('Headers: ', req.headers);
  console.log('--------------------------------');
  console.log('');
}

function unsafeResponse(req) {
  return `${req.method} request received to the path '${req.path}' with the following body: ${JSON.stringify(req.body)}`;
}
