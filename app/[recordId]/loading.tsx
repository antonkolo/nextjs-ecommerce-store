import Image from 'next/image';
import React from 'react';
import villalobos from '../../public/villalobos.svg';
import styles from './loading.module.scss';

export default function loading() {
  return (
    <div data-test-id="loading" className={styles.container}>
      <Image
        className={styles.img}
        alt="villalobos"
        src={villalobos}
        width={600}
      />
    </div>
  );
}
