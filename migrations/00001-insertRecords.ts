import { Sql } from 'postgres';

const records = [
  {
    id: 1,
    title: 'What Reality? EP',
    artist: 'Velvet Velour',
    label: 'Sonido Chido',
    releaseYear: '2024',
    price: 14.5,
    description:
      'Liam Dadds AKA Velvet Velour took inspiration and encouragement from Josh Tweek and his MMSU podcast series when he was writing these tunes. The resulting mini-album has ended up precisely where it should be, as the 2nd release on Josh’s downtempo label Sonido Chido. What goes around comes around!',
    soundcloudLink:
      'https://soundcloud.com/liricadistribution/velvet-velour-what-reality-ep',
  },
  {
    id: 2,
    title: 'Lost & Found EP',
    artist: 'Solar Plexus',
    label: 'Opia Records',
    releaseYear: '2024',
    price: 15,
    description: 'fresh 4 tracker on Opia be fast',
    soundcloudLink:
      'https://soundcloud.com/torture-the-artist/exclusive-solar-plexus-beautifulyaknow-opia-records',
  },
];

export async function up(sql: Sql) {
  for (const record of records) {
    await sql`
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
          ${record.title},
          ${record.artist},
          ${record.label},
          ${record.releaseYear},
          ${record.price},
          ${record.description},
          ${record.soundcloudLink}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const record of records) {
    await sql`
      DELETE FROM records
      WHERE
        id = ${record.id}
    `;
  }
}
