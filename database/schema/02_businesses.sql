DROP TABLE IF EXISTS businesses

CREATE TABLE businesses (
  id SERIAL PRIMARY KEY NOT NULL,
  type VARCHAR(200) NOT NULL
  image_url VARCHAR(200) NOT NULL
  website_url VARCHAR(200) NOT NULL
  company_name VARCHAR(200) NOT NULL
  description VARCHAR(1000) NOT NULL
  county VARCHAR(200) NOT NULL
  province VARCHAR(200) NOT NULL
  city VARCHAR(200) NOT NULL
  address VARCHAR(200) NOT NULL
  postal_code VARCHAR(200) NOT NULL
  email VARCHAR(200) UNIQUE NOT NULL
  phone BIGINT UNIQUE NOT NULL
  password VARCHAR(200) NOT NULL
);