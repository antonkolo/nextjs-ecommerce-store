# Online Record Shop built with next.js.

## Motivation

This fullstack applicationo is meant as a learning project to get comfortable using react and next js.

## Features

- View records available for sale
- Add records to the cart
- View individual vinyl records pages
- Pre-listen to the tracks using the embedded soundcloud

## Technologies

- designed in figma
- reacts.js
- next.js
- scss
- css modules
- postgres.js (database)

## Setup

### Database Setup

```sql
postgres=# CREATE DATABASE nextjs_ecommerce_store;
CREATE DATABASE
postgres=# CREATE USER nextjs_ecommerce_store WITH ENCRYPTED PASSWORD 'nextjs_ecommerce_store';
CREATE ROLE
postgres=# GRANT ALL PRIVILEGES ON DATABASE nextjs_ecommerce_store TO nextjs_ecommerce_store;
GRANT
postgres=# \connect nextjs_ecommerce_store
You are now connected to database "nextjs_ecommerce_store" as user "anton.kolomoiets".
nextjs_ecommerce_store=# CREATE SCHEMA nextjs_ecommerce_store AUTHORIZATION nextjs_ecommerce_store;
CREATE SCHEMA
\q
```

## References

The layouts and design are heavily inspired by https://subwax.es/, this application **is not meant for commercial use**.
