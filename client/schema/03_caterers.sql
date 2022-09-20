DROP TABLE IF EXISTS caterers

CREATE TABLE caterers (
  id SERIAL PRIMARY KEY NOT NULL,
  business_id FOREIGN KEY REFERENCES businesses (id) NOT NULL
  capacity TINYINT NOT NULL
  specialty VARCHAR(1000) NOT NULL
  menu_url VARCHAR(500) NOT NULL
  food_alternatives VARCHAR(500)
);