DROP DATABASE IF EXISTS resourcemvp;

CREATE DATABASE resourcemvp;

\c resourcemvp

DROP TABLE IF EXISTS resources;

CREATE TABLE resources(
  id SERIAL PRIMARY KEY,
  title TEXT,
  url TEXT,
  poster TEXT,
  cohort TEXT,
  description TEXT
);

