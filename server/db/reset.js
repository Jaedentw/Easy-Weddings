require('dotenv').config();
const { db } = require('./index');

const createSchemas = require('./schemas/createSchemas');
const seedDatabase = require('./seeds/seedDatabase');


db.connect();

const promises = [
  db.query(createSchemas),
  db.query(seedDatabase),
];

Promise.all(promises)
  .then(() => console.log('DB reset completed!'))
  .then(() => db.end())
  .catch(err => console.log('Failed to reset', err));
