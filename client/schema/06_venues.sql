DROP TABLE IF EXISTS venues

CREATE TABLE venues (
  id SERIAL PRIMARY KEY NOT NULL,
  business_id FOREIGN KEY REFERENCES businesses (id) NOT NULL
  capacity TINYINT NOT NULL
  theme VARCHAR(500)
  extra_features VARCHAR(1000)
);