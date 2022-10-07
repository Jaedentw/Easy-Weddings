/* eslint-disable camelcase */
const { db } = require('../db');

const create = (name, city, website_url, specialty, image_url, rate_per_hour, description, rates_info, userId) => {
  return db
    .query(
      'INSERT INTO vendors (name, city, website_url, specialty, image_url, rate_per_hour, description, rates_info, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7,$8 ,$9) RETURNING *',
      [name, city, website_url, specialty, image_url, rate_per_hour, description, rates_info, userId]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const getAll = () => {
  return db
    .query('SELECT * FROM vendors')
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

const getById = id => {
  return db
    .query('SELECT * FROM vendors WHERE id = $1', [id])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const update = (name, color, emoji, id) => {
  return db
    .query(
      'UPDATE vendors SET name = $1, color = $2, emoji = $3 WHERE id = $4 RETURNING *',
      [name, color, emoji, id]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const remove = id => {
  return db
    .query('DELETE FROM vendors WHERE id = $1', [id])
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

module.exports = { create, getAll, getById, update, remove };
