import { RowList } from 'postgres';
import { getAllRecordsInsecure } from '../database/records';
import RecordsList, { Record } from './components/RecordsList';
import styles from './page.module.scss';

export default async function Home() {
  const records: RowList<Record[]> = await getAllRecordsInsecure();

  return (
    <div className={styles.wrapper}>
      <h1>Records in stock</h1>
      <RecordsList records={records} />
    </div>
  );
}
