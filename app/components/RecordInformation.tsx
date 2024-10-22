import React from 'react';
import QuantityControls from './QuantityControls';
import Player from './ReactPlayer';
import styles from './RecordInformation.module.scss';
import { type Record } from './RecordsList';

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
        <p data-test-id="product-price">
          {record.price}
          <span> $</span>
        </p>
      </div>

      <p>{record.description}</p>
      {/* render player  */}
      {record.soundcloudLink && (
        <Player soundcloudLink={record.soundcloudLink} />
      )}
      <QuantityControls recordId={record.id} />
    </div>
  );
}
