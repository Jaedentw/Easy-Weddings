DROP TABLE IF EXISTS decorators

CREATE TABLE decorators (
  id SERIAL PRIMARY KEY NOT NULL,
  business_id FOREIGN KEY REFERENCES businesses (id) NOT NULL
  specialty VARCHAR(1000)
  theme VARCHAR(200)
);