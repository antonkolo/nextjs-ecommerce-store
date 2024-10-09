import React from 'react';
import styles from './RecordInformation.module.scss';

export default function RecordInformation(props) {
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
      <div className={styles['controls-wrapper']}>
        <div>- 1 +</div>
        <button>Add to cart</button>
      </div>
    </div>
  );
}
