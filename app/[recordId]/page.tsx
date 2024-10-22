import Image from 'next/image';
import React from 'react';
import { getRecordInsecure } from '../../database/records';
import RecordInformation from '../components/RecordInformation';
import styles from './page.module.scss';

type Props = {
  params: Promise<{ recordId: string }>;
};

export default async function ProductPage(props: Props) {
  const params = await props.params;

  const record = await getRecordInsecure(Number(params.recordId));
  if (record) {
    return (
      <div className={styles.wrapper}>
        <article className={styles['record-card']}>
          <div className={styles['image-wrapper']}>
            <Image
              data-test-id="product-image"
              alt="Record sleeve photo"
              src={`/product-images/product-image-${record.id.toString()}.webp`}
              width={440}
              height={440}
            />
          </div>
          <RecordInformation record={record} />
        </article>
      </div>
    );
  } else {
    return <div>Record not found</div>;
  }
}
