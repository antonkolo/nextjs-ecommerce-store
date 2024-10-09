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
  if (record) {
    return (
      <div className={styles.wrapper}>
        <article className={styles['record-card']}>
          <div className={styles['flex-item']}>
            <div className={styles['image-wrapper']}>
              <Image
                layout="responsive"
                className={styles.image}
                alt="Record sleeve photo"
                src={`/product-images/product-image-${record.id.toString()}.jpg`}
                width={440}
                height={440}
              />
            </div>
          </div>
          <RecordInformation record={record} />
        </article>
      </div>
    );
  } else {
    return <div>Error</div>;
  }
}
