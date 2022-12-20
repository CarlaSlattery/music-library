const db = require('../db/index');

exports.deleteArtist = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      rows: [artist],
    } = await db.query(`DELETE FROM Artists WHERE id = $1 RETURNING *, [id]`, [
      id,
    ]);

    if (!artist) {
      return res.status(404).json({ message: `artist ${id} does not exist` });
    }
    res.status(200).json(artist);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
