import { getAllRecords } from '../data/records';
import RecordsList from './components/recordsList';

export default function Home() {
  const records = getAllRecords();
  console.log(records);
  return <RecordsList records={records} />;
}
