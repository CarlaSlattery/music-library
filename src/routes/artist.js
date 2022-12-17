const express = require('express');
const artistController = require('../controllers/artist');

const artistRouter = express.Router();

artistRouter.post('/', artistController.create);

module.exports = artistRouter;
