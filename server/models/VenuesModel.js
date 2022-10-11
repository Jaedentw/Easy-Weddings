/* eslint-disable camelcase */
const { db } = require('../db');

const create = (name, city, website_url, capacity, theme, image_url, description, features, userId) => {
  return db
    .query(
      'INSERT INTO venues (user_id, name, city, website_url, capacity, theme, image_url, description, features) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [userId, name, city, website_url, capacity, theme, image_url, description, features]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const getAll = () => {
  return db
    .query('SELECT * FROM venues')
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

const getById = id => {
  return db
    .query('SELECT * FROM venues WHERE id = $1', [id])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const update = (name, city, website_url, capacity, theme, image_url, description, features, userId, id) => {
  return db
    .query(
      'UPDATE venues SET name = $1, city = $2, website_url = $3, capacity = $4, theme = $5, image_url = $6, description = $7, features = $8, user_id = $9 WHERE id = $10 RETURNING *',
      [name, city, website_url, capacity, theme, image_url, description, features, userId, id]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const remove = id => {
  return db
    .query('DELETE FROM venues WHERE id = $1', [id])
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

module.exports = { create, getAll, getById, update, remove };
