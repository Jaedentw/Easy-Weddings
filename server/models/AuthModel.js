/* eslint-disable camelcase */
const { db } = require('../db');

const register = (first_name, last_name, country, province, city, address, postal_code, email, phone, password, is_business, website_url, business_name) => {
  return db
    .query('INSERT INTO users (email, password,first_name,last_name,country,province,city,address,postal_code,phone,is_business,website_url, business_name) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *', [
      email,
      password,
      first_name,
      last_name,
      country,
      province,
      city,
      address,
      postal_code,
      phone,
      is_business,
      website_url,
      business_name
    ])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const login = email => {
  return db
    .query('SELECT * FROM users WHERE email = $1', [email])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};

const businessLogin = email => {
  return db
    .query('SELECT * FROM businesses WHERE email = $1', [email])
    .then(data => data.rows[0])
    .catch(err => console.error(err.stack));
};


module.exports = { register, login, businessLogin };
