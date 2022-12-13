const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (__req, res) => {
  return res.status(200).json({ result: 'Hello World' });
});

module.exports = app;
