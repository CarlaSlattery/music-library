const express = require('express');
const artistController = require('../controllers/artist');
const artistUpdate = require('../controllers/artist-update');

const artistRouter = express.Router();

artistRouter.post('/', artistController.createArtist);
artistRouter.get('/', artistController.getAllArtists);
artistRouter.get('/:id', artistController.getArtistbyId);
artistRouter.put('/:id', artistUpdate.putArtistById);
artistRouter.patch('/:id', artistUpdate.patchArtistById);
artistRouter.delete('/:id', artistUpdate.deleteArtist);

module.exports = artistRouter;
