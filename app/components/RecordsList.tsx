import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './RecordsList.module.scss';

export type Record = {
  id: number;
  title: string;
  artist: string;
  year: string;
  price: string;
  description: string;
  genres: string[];
  soundcloudLink: string;
};

export type Props = {
  records: Record[];
};

export default function RecordsList(props: Props) {
  return (
    <ul className={styles['records-list']}>
      {props.records.map((record) => {
        return (
          <li key={`record-${record.id}`} className={styles.record}>
            <div className={styles['record-info-wrapper']}>
              <Link
                href={`/${record.id}`}
                data-test-id={`data-test-id="product-${record.id}`}
              >
                <Image
                  alt="Record sleeve photo"
                  width={128}
                  height={128}
                  src={`/product-images/product-image-${record.id.toString()}.webp`}
                />
              </Link>

              <div className={styles['record-name-wrapper']}>
                <Link
                  href={`/${record.id}`}
                  data-test-id={`data-test-id="product-${record.id}`}
                >
                  <h2 className={styles['record-title']}>{record.title}</h2>
                </Link>
                <p className={styles['record-artist']}>{record.artist}</p>
                <p className={styles['record-year']}>{record.year}</p>
              </div>
              <div className={styles['genre-wrapper']}>
                {record.genres.map((genre) => {
                  return (
                    <p
                      className={styles['genre-tag']}
                      key={`${genre}-1`}
                    >{`# ${genre}`}</p>
                  );
                })}
              </div>
            </div>
            <div className={styles['record-price-button-wrapper']}>
              <p className={styles.price}>{record.price} $</p>
              <button className={styles.button}>Add to cart</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
