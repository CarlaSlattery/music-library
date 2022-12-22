const db = require('../db/index');

exports.putArtistById = async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.name;
    const genre = req.body.genre;

    const {
      rows: [artist],
    } = await db.query(
      `UPDATE Artists SET name = $1, genre = $2 WHERE id = $3 RETURNING *`,
      [name, genre, id]
    );

    if (!artist) {
      return res.status(404).json({ message: `artist ${id} does not exist` });
    }
    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.patchArtistById = async (req, res) => {
  const { id } = req.params;
  const { name, genre } = req.body;

  let query, params;

  if (name && genre) {
    query = `UPDATE Artists SET name = $1, genre = $2 WHERE id = $3 RETURNING *`;
    params = [name, genre, id];
  } else if (name) {
    query = `UPDATE Artists SET name = $1 WHERE id = $2 RETURNING *`;
    params = [name, id];
  } else if (genre) {
    query = `UPDATE Artists SET genre = $1 WHERE id = $2 RETURNING *`;
    params = [genre, id];
  }
  try {
    const {
      rows: [artist],
    } = await db.query(query, params);
    if (!artist) {
      return res.status(404).json({ message: `artist ${id} does not exist` });
    }
    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
exports.deleteArtist = async (req, res) => {
  try {
    const { artistId } = req.params;

    const {
      rows: [artist],
    } = await db.query(`DELETE FROM Artists WHERE id = $1 RETURNING *`, [
      artistId,
    ]);

    if (!artist) {
      return res
        .status(404)
        .json({ message: `artist ${artistId} does not exist` });
    }
    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
