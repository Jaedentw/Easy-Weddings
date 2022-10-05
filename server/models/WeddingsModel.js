const { db } = require('../db');

const create = (user_id, name) => {
  return db
    .query(
      'INSERT INTO weddings (user_id, name) VALUES ($1, $2) RETURNING *',
      [user_id, name]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const getAll = () => {
  return db
    .query('SELECT * FROM weddings')
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

const getById = id => {
  return db
    .query('SELECT * FROM weddings WHERE id = $1', [id])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const update = (id, user_id, name, caterers, decorators, venues, vendors, image_url) => {
  console.log("function id", user_id)
  return db
    .query(
      'UPDATE weddings SET user_id = $2, name = $3, caterers = $4, decorators = $5, venues = $6, vendors = $7, image_url = $8 WHERE id = $1 RETURNING *',
      [id, user_id, name, caterers, decorators, venues, vendors, image_url]
    )
    .then(data => console.log(data))
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const remove = id => {
  return db
    .query('DELETE FROM weddings WHERE id = $1', [id])
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

module.exports = { create, getAll, getById, update, remove };
