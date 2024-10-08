import Image from 'next/image';
import React from 'react';
import { getRecord } from '../../database/records';
import RecordInformation from '../components/RecordInformation';
import styles from './ProductPage.module.scss';

export default function ProductPage(props) {
  const record = getRecord(Number(props.params.recordId));

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <Image
          width={440}
          height={440}
          src={`/product-images/product-image-${record.id.toString()}.jpg`}
        />
        <RecordInformation />
      </section>
    </div>
  );
}
