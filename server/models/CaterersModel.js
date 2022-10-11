/* eslint-disable camelcase */
const { db } = require('../db');

const create = (name, city, image_url, capacity, cuisine, menu_url, description, alternatives, userId) => {
  return db
    .query(
      'INSERT INTO caterers (name, city, image_url, capacity, cuisine, menu_url, description, alternatives, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [name, city, image_url, capacity, cuisine, menu_url, description, alternatives, userId]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const getAll = () => {
  return db
    .query('SELECT * FROM caterers')
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

const getById = id => {
  return db
    .query('SELECT * FROM caterers WHERE id = $1', [id])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const update = (name, city, image_url, capacity, cuisine, menu_url, description, alternatives, userId, id) => {
  return db
    .query(
      'UPDATE caterers SET name = $1, city = $2, image_url = $3, capacity = $4, cuisine = $5, menu_url = $6, description = $7, alternatives = $8, user_id = $9 WHERE id = $10 RETURNING *',
      [name, city, image_url, capacity, cuisine, menu_url, description, alternatives, userId, id]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const remove = id => {
  return db
    .query('DELETE FROM caterers WHERE id = $1', [id])
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

module.exports = { create, getAll, getById, update, remove };
