const { db } = require('../db');

const create = (name, email, phone, country, city, province, postal_code, address, website_url, hashedPassword) => {
  return db
    .query(
      'INSERT INTO businesses (name, email, phone, country, city, province, postal_code, address, website_url, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *',
      [
        name,
        email,
        phone,
        country,
        city,
        province,
        postal_code,
        address,
        website_url,
        hashedPassword
      ]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const getAll = () => {
  return db
    .query('SELECT * FROM businesses')
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

const getById = id => {
  return db
    .query('SELECT * FROM businesses WHERE id = $1', [id])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const update = (name, color, emoji, id) => {
  return db
    .query(
      'UPDATE businesses SET name = $1, color = $2, emoji = $3 WHERE id = $4 RETURNING *',
      [name, color, emoji, id]
    )
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const remove = id => {
  return db
    .query('DELETE FROM businesses WHERE id = $1', [id])
    .then(data => data.rows)
    .catch(err => console.error(err.stack));
};

module.exports = { create, getAll, getById, update, remove };
