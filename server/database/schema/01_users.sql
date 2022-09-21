DROP TABLE IF EXISTS users

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE
  first_name VARCHAR(200) NOT NULL
  last_name VARCHAR(200) NOT NULL
  county VARCHAR(200) NOT NULL
  province VARCHAR(200) NOT NULL
  city VARCHAR(200) NOT NULL
  address VARCHAR(200) NOT NULL
  postal_code VARCHAR(200) NOT NULL
  email VARCHAR(200) UNIQUE NOT NULL
  phone BIGINT UNIQUE NOT NULL
  password VARCHAR(200) NOT NULL
);