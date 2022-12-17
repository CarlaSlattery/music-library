const express = require('express');
const artistRouter = require('./routes/artist');

const app = express();
app.use(express.json());
app.use('/artist', artistRouter);

app.get('/', (__req, res) => {
  return res.status(200).json({ result: 'Hello World' });
});

module.exports = app;
