import { RowList } from 'postgres';
import { getAllRecordsInsecure } from '../database/records';
import RecordsList, { Record } from './components/RecordsList';

export default async function Home() {
  const records: RowList<Record[]> = await getAllRecordsInsecure();

  return <RecordsList records={records} />;
}
