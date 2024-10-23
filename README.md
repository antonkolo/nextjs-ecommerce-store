# Online Record Shop built with next.js.

A user can browse, records in stock, go the individual pages and prelisten tracks via embedded soundcloud / youtube. Records can be added to cart and ordered.
![products page](<Screenshot 2024-10-23 at 12.05.17.png>)
![single product page](<Screenshot 2024-10-23 at 12.06.05.png>)
![cart](<Screenshot 2024-10-23 at 12.06.26.png>)

## Motivation

This fullstack application is meant as a learning project to get comfortable using react and next js.

## Features

- View records available for sale
- Add records to the cart
- View individual vinyl records pages
- Pre-listen to the tracks using the embedded soundcloud

## Technologies

- designed in figma
- react.js
- next.js
- typescript
- scss
- css modules
- postgres.js (database)
- ley (migrations)
- docker

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
