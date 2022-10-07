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

const update = (name, color, emoji, id) => {
  return db
    .query(
      'UPDATE venues SET name = $1, color = $2, emoji = $3 WHERE id = $4 RETURNING *',
      [name, color, emoji, id]
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
