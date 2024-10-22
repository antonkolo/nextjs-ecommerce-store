import { type Sql } from 'postgres';

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE records (
      id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      title varchar(255) NOT NULL,
      artist varchar(255) NOT NULL,
      label varchar(255) NOT NULL,
      release_year varchar(5),
      price decimal(10, 2) NOT NULL,
      description varchar(1000),
      soundcloud_link varchar(255)
    )
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE records`;
}
