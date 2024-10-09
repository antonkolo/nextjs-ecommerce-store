import React from 'react';
import styles from './QuantityControls.module.scss';

export default function QuantityControls() {
  return (
    <div className={styles.container}>
      <div className={styles['controls-wrapper']}>
        <button>-</button>
        <input className={styles['quantity-input']} type="number" />
        <button>+</button>
      </div>
      <button className={styles['button-add']}>Add to cart</button>
    </div>
  );
}
