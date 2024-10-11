import React from 'react';
import QuantityControls from './QuantityControls';
import Player from './ReactPlayer';
import styles from './RecordInformation.module.scss';
import { Record } from './RecordsList';

type Props = {
  record: Record;
};

export default function RecordInformation(props: Props) {
  const record = props.record;
  return (
    <div className={styles['record-information']}>
      <div className={styles['title-price-wrapper']}>
        <div>
          <h1>{record.title}</h1>
          <strong>{record.artist}</strong>
        </div>
        <p>{record.price}$</p>
      </div>

      <p>{record.description}</p>
      <Player />
      <QuantityControls />
    </div>
  );
}
