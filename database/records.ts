import { cache } from 'react';
import { Record } from '../app/components/RecordsList';
import { sql } from './connect';

// const records = [
//   {
//     title: 'Lost & Found EP',
//     artist: 'Solar Plexus',
//     label: 'Opia Records',
//     releaseYear: '2024',
//     price: '15',
//     description: 'fresh 4 tracker on Opia be fast',
//     genres: ['Progressive House', 'Trance'],
//     soundcloudLink:
//       'https://soundcloud.com/torture-the-artist/exclusive-solar-plexus-beautifulyaknow-opia-records',
//   },
//   {},
// ];

export const getRecordInsecure = cache(async (recordId: Record['id']) => {
  const records = await sql<Record[]>`
    SELECT
      *
    FROM
      records
    WHERE
      id = ${recordId}
  `;
  return records[0];
});

export const getAllRecordsInsecure = cache(async () => {
  const allRecords = await sql<Record[]>`
    SELECT
      *
    FROM
      records
  `;
  return allRecords;
});

// nextjs_ecommerce_store

// const allRecords = sql<
//   {
//     id: number;
//     title: string;
//     artist: string;
//     label: string;
//     year: string | null;
//     price: string;
//     description: string | null;
//     soundcloudlink: string | null;
//   }[]
// >`
//   SELECT
//     *
//   FROM
//     records
// `;
// return allRecords;
