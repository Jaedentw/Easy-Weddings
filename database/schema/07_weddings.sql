DROP TABLE IF EXISTS weddings

CREATE TABLE weddings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id FOREIGN KEY REFERENCES users (id)
  name VARCHAR(200) NOT NULL
  date DATE 
  budget INTEGER
  guest_count TINYINT
);