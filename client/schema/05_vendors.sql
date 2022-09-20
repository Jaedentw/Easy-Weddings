DROP TABLE IF EXISTS vendors

CREATE TABLE vendors (
  id SERIAL PRIMARY KEY NOT NULL,
  business_id FOREIGN KEY REFERENCES businesses (id) NOT NULL
  specialty VARCHAR(1000) NOT NULL
  rate_per_hour SMALLINT 
  rates_info VARCHAR(500)
);