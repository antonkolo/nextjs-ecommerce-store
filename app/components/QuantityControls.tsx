'use client';

import React, { useState } from 'react';
import styles from './QuantityControls.module.scss';

export default function QuantityControls() {
  const [quantity, setQuantity] = useState(0);

  // functions
  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementQuantity() {
    setQuantity(quantity - 1);
  }

  function handleButtonClick() {
    setQuantity(0);
  }

  return (
    <div className={styles.container}>
      <div className={styles['controls-wrapper']}>
        <button
          onClick={decrementQuantity}
          disabled={quantity === 0 ? true : false}
        >
          -
        </button>
        <input
          value={quantity}
          onChange={(event) => {
            const value = event.target.value;
            setQuantity(Number(value));
          }}
          className={styles['quantity-input']}
          type="number"
        />
        <button onClick={incrementQuantity}>+</button>
      </div>
      <button onClick={handleButtonClick} className={styles['button-add']}>
        Add to cart
      </button>
    </div>
  );
}
