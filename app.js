const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('*', (req, res) => {
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

  res.send('Hello World!');
});

app.post('*', (req, res) => {
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

  res.send('Hello World!');
});

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT || port}!`))