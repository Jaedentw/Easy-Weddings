module.exports = `
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS businesses CASCADE;
DROP TABLE IF EXISTS caterers CASCADE;
DROP TABLE IF EXISTS decorators CASCADE;
DROP TABLE IF EXISTS vendors CASCADE;
DROP TABLE IF EXISTS venues CASCADE;
DROP TABLE IF EXISTS weddings CASCADE;
DROP TABLE IF EXISTS personnel CASCADE;
DROP TABLE IF EXISTS to_do CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(200) NOT NULL,
  last_name VARCHAR(200) NOT NULL,
  country VARCHAR(200) NOT NULL,
  province VARCHAR(200) NOT NULL,
  city VARCHAR(200) NOT NULL,
  address VARCHAR(200) NOT NULL,
  postal_code VARCHAR(200) NOT NULL,
  email VARCHAR(200) UNIQUE NOT NULL,
  phone BIGINT UNIQUE NOT NULL,
  password VARCHAR(200) NOT NULL
);


CREATE TABLE businesses (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users (id) ON DELETE CASCADE,
  name VARCHAR(200) NOT NULL,
  county VARCHAR(200) NOT NULL,
  province VARCHAR(200) NOT NULL,
  city VARCHAR(200) NOT NULL,
  address VARCHAR(200) NOT NULL,
  postal_code VARCHAR(200) NOT NULL,
  email VARCHAR(200) UNIQUE NOT NULL,
  website_url VARCHAR(200) NOT NULL,
  phone BIGINT UNIQUE NOT NULL
);


CREATE TABLE caterers (
  id SERIAL PRIMARY KEY NOT NULL,
  business_id INTEGER NOT NULL,
  FOREIGN KEY(business_id) REFERENCES businesses (id) ON DELETE CASCADE,
  name VARCHAR(200) NOT NULL,
  city VARCHAR(200) NOT NULL,
  image_url VARCHAR(200) NOT NULL,
  capacity INTEGER NOT NULL,
  cuisine VARCHAR(1000) NOT NULL,
  menu_url VARCHAR(500) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  food_alternatives VARCHAR(500)
);


CREATE TABLE decorators (
  id SERIAL PRIMARY KEY NOT NULL,
  business_id INTEGER NOT NULL,
  FOREIGN KEY(business_id) REFERENCES businesses (id) ON DELETE CASCADE,
  name VARCHAR(200) NOT NULL,
  city VARCHAR(200) NOT NULL,
  website_url VARCHAR(200) NOT NULL,
  image_url VARCHAR(200) NOT NULL,
  specialty VARCHAR(1000),
  description VARCHAR(1000) NOT NULL,
  theme VARCHAR(200)
);


CREATE TABLE vendors (
  id SERIAL PRIMARY KEY NOT NULL,
  business_id INTEGER NOT NULL,
  FOREIGN KEY(business_id) REFERENCES businesses (id) ON DELETE CASCADE,
  name VARCHAR(200) NOT NULL,
  city VARCHAR(200) NOT NULL,
  website_url VARCHAR(200) NOT NULL,
  specialty VARCHAR(50) NOT NULL,
  image_url VARCHAR(200) NOT NULL,
  rate_per_hour SMALLINT,
  description VARCHAR(1000) NOT NULL,
  rates_info VARCHAR(500)
);


CREATE TABLE venues (
  id SERIAL PRIMARY KEY NOT NULL,
  business_id INTEGER NOT NULL,
  FOREIGN KEY(business_id) REFERENCES businesses (id) ON DELETE CASCADE,
  name VARCHAR(200) NOT NULL,
  city VARCHAR(200) NOT NULL,
  website_url VARCHAR(200) NOT NULL,
  capacity INTEGER NOT NULL,
  theme VARCHAR(500),
  image_url VARCHAR(200) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  extra_features VARCHAR(1000)
);


CREATE TABLE weddings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users (id) ON DELETE CASCADE,
  name VARCHAR(200) NOT NULL,
  date DATE,
  budget INTEGER,
  guest_count INTEGER,
  image_url VARCHAR(500)
);


CREATE TABLE personnel (
  id SERIAL PRIMARY KEY NOT NULL,
  business_id INTEGER NOT NULL,
  FOREIGN KEY(business_id) REFERENCES businesses (id) ON DELETE CASCADE,
  wedding_id INTEGER NOT NULL,
  FOREIGN KEY(wedding_id) REFERENCES weddings (id) ON DELETE CASCADE
);
 

CREATE TABLE to_do (
  id SERIAL PRIMARY KEY NOT NULL,
  wedding_id INTEGER NOT NULL,
  FOREIGN KEY(wedding_id) REFERENCES weddings (id) ON DELETE CASCADE,
  title VARCHAR(100) NOT NULL,
  notes VARCHAR(500)
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users (id) ON DELETE CASCADE,
  business_id INTEGER NOT NULL,
  FOREIGN KEY(business_id) REFERENCES businesses (id) ON DELETE CASCADE
)
`;
