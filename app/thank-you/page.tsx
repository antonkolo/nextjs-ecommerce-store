import Image from 'next/image';
import React from 'react';
import SmileyFace from '../../public/yellow smiley 3.svg';
import styles from './page.module.scss';

export default function ThankYouPage() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <p> Thank you!</p>
      </div>
      <div className={styles.background}>
        <Image
          src={SmileyFace}
          alt="Warped smiley face"
          width={205}
          height={753}
        />
        <Image
          src={SmileyFace}
          alt="Warped smiley face"
          width={205}
          height={753}
        />
        <Image
          src={SmileyFace}
          alt="Warped smiley face"
          width={205}
          height={753}
        />
      </div>
    </div>
  );
}
