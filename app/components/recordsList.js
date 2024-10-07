import Image from 'next/image';
import React from 'react';
import styles from './RecordsList.module.scss';

export default function RecordsList(props) {
  return (
    <ul className={styles['records-list']}>
      {props.records.map((record) => {
        return (
          <li key={`record-${record.id}`} className={styles.record}>
            <div className={styles['record-info-wrapper']}>
              <Image
                width="128"
                height="128"
                src={`/product-images/product-image-${record.id.toString()}.jpg`}
              />
              <div>
                <h2 className={styles['record-title']}>{record.title}</h2>
                <p>{record.artist}</p>
                <p>{record.year}</p>
              </div>
              <div>
                {record.genres.map((genre) => {
                  return <p key={`${genre}-1`}>{`# ${genre}`}</p>;
                })}
              </div>
            </div>
            <div>
              <p>{record.price}</p>
              <button>Add</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
