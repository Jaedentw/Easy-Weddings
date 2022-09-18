DROP TABLE IF EXISTS personnel

CREATE TABLE personnel (
  id SERIAL PRIMARY KEY NOT NULL,
  business_id FOREIGN KEY REFERENCES businesses (id) NOT NULL
  wedding_id FOREIGN KEY REFERENCES weddings (id) NOT NULL
);