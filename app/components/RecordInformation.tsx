import React from 'react';
import QuantityControls from './QuantityControls';
import styles from './RecordInformation.module.scss';
import { Record } from './RecordsList';

type Props = {
  record: Record;
};

export default function RecordInformation(props: Props) {
  const record = props.record;
  return (
    <div className={styles['record-information']}>
      <div>
        <div>
          <h1>{record.title}</h1>
          <strong>{record.artist}</strong>
        </div>
        <p>{record.price}$</p>
      </div>

      <p>{record.description}</p>

      <QuantityControls />
    </div>
  );
}
