import { getAllRecords } from '../database/records';
import RecordsList from './components/RecordsList';

export default function Home() {
  const records = getAllRecords();
  return <RecordsList records={records} />;
}
