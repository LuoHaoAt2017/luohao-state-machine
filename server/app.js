const express = require('express');
const app = express();
const router = require('./routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(router);

app.use(function(req, res) {
  res.status(404).send({ error: 'Not found' });
});

app.listen(8088, 'localhost', () => {
  console.log('server listen on 8088');
});

module.exports = app;