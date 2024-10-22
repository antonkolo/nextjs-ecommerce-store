import { cache } from 'react';
import { type Record } from '../app/components/RecordsList';
import { sql } from './connect';

export const getRecordInsecure = cache(async (recordId: Record['id']) => {
  const [record] = await sql<Record[]>`
    SELECT
      *
    FROM
      records
    WHERE
      id = ${recordId}
  `;
  return record;
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
