const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'easy_weddings'
});

const getAllBusinesses = function() {
  return pool
    .query(`SELECT * FROM businesses`)
    .then((result) => {
      return result.rows
    })
    .catch(() => {
      return null;
    });
};
exports.getAllBusinesses = getAllBusinesses;