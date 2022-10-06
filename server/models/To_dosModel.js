const { db } = require('../db');

const create = (wedding_id, title, checked) => {
  return db
    .query(
      'INSERT INTO to_dos (wedding_id, title, checked) VALUES ($1, $2, $3) RETURNING *',
      [wedding_id, title, checked]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const getAll = () => {
  return db
    .query('SELECT * FROM to_dos')
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

const getById = id => {
  return db
    .query('SELECT * FROM to_dos WHERE id = $1', [id])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const update = (id, wedding_id, title, checked) => {
  return db
    .query(
      'UPDATE to_dos SET wedding_id = $2, title = $3, checked = $4 WHERE id = $1 RETURNING *',
      [id, wedding_id, title, checked]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const remove = id => {
  return db
    .query('DELETE FROM to_dos WHERE id = $1', [id])
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

module.exports = { create, getAll, getById, update, remove };
