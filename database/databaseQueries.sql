--create db
CREATE DATABASE nextjs_ecommerce_store;

-- create user and grant permissions
CREATE USER nextjs_ecommerce_store
WITH
  encrypted password 'nextjs_ecommerce_store';

GRANT ALL privileges ON database nextjs_ecommerce_store TO nextjs_ecommerce_store;

-- create a schema
CREATE SCHEMA nextjs_ecommerce_store AUTHORIZATION nextjs_ecommerce_store;

-- psql, login as user: psql -U nextjs_ecommerce_store
-- create table
CREATE TABLE records (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title varchar(40) NOT NULL,
  artist varchar(40) NOT NULL,
  label varchar(40) NOT NULL,
  release_year varchar(5),
  price decimal(10, 2) NOT NULL,
  description varchar(500),
  soundcloud_link varchar(255)
)
-- insert first record
INSERT INTO
  records (
    title,
    artist,
    label,
    release_year,
    price,
    description,
    soundcloud_link
  )
VALUES
  (
    'What Reality? EP',
    'Velvet Velour',
    'Sonido Chido',
    '2024',
    14.50,
    'Liam Dadds AKA Velvet Velour took inspiration and encouragement from Josh Tweek and his MMSU podcast series when he was writing these tunes. The resulting mini-album has ended up precisely where it should be, as the 2nd release on Josh’s downtempo label Sonido Chido. What goes around comes around!',
    'https://soundcloud.com/liricadistribution/velvet-velour-what-reality-ep'
  ),
  (
    'Lost & Found EP',
    'Solar Plexus',
    'Opia Records',
    '2024',
    15,
    'fresh 4 tracker on Opia be fast',
    'https://soundcloud.com/torture-the-artist/exclusive-solar-plexus-beautifulyaknow-opia-records',
  );
