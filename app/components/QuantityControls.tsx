import React from 'react';
import styles from './QuantityControls.module.scss';

export default function QuantityControls() {
  return (
    <div className={styles['controls-wrapper']}>
      <button>-</button>
      <input type="number" />
      <button>+</button>
    </div>
  );
}
