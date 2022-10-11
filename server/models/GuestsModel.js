const { db } = require('../db');

const create = (wedding_id, name, value, plus_one, confirmed ) => {
  return db
    .query(
      'INSERT INTO guests (wedding_id, name, value, plus_one, confirmed ) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [wedding_id, name, value, plus_one, confirmed]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const getAll = () => {
  return db
    .query('SELECT * FROM guests')
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

const getById = id => {
  return db
    .query('SELECT * FROM guests WHERE id = $1', [id])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const update = (wedding_id, name, confirmed, value, plus_one, id ) => {
  return db
    .query(
      'UPDATE guests SET wedding_id = $1, name = $2, confirmed = $3, value = $4, plus_one = $5 WHERE id = $6 RETURNING *',
      [wedding_id, name, confirmed, value, plus_one, id]
    )
    .then(data => console.log(data.rows[0]))
    .catch(err => console.error(err.stack));
};

const remove = id => {
  return db
    .query('DELETE FROM guests WHERE id = $1', [id])
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

module.exports = { create, getAll, getById, update, remove };
