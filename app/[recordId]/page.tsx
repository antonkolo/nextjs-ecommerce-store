import Image from 'next/image';
import React from 'react';
import { getRecord } from '../../database/records';
import RecordInformation from '../components/RecordInformation';
import styles from './page.module.scss';

type Props = {
  params: Promise<{ recordId: string }>;
};

export default async function ProductPage(props: Props) {
  const params = await props.params;

  const record = getRecord(Number(params.recordId));

  return (
    <div className={styles.wrapper}>
      <article className={styles['record-card']}>
        <Image
          alt="Record sleeve photo"
          width={440}
          height={440}
          src={`/product-images/product-image-${record?.id.toString()}.jpg`}
        />
        <RecordInformation record={record} />
      </article>
    </div>
  );
}
