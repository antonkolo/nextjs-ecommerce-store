'use client';

import React, { useState } from 'react';
import { addRecordToCart } from '../../util/cookies';
import styles from './QuantityControls.module.scss';

export default function QuantityControls({ recordId }: { recordId: number }) {
  const [quantity, setQuantity] = useState<number | ''>(0);

  // functions
  function incrementQuantity() {
    setQuantity((prevQuantity) => (prevQuantity === '' ? 1 : prevQuantity + 1));
  }

  function decrementQuantity() {
    setQuantity((prevQuantity) =>
      prevQuantity === '' ? 0 : Math.max(prevQuantity - 1, 0),
    );
  }

  async function handleButtonClick() {
    if (quantity) {
      await addRecordToCart(recordId, quantity);
    }
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
            event.preventDefault();
            const value = event.target.value;
            if (value === '') {
              setQuantity(''); // Allow empty string to represent no input
            } else {
              const numValue = Number(value);
              setQuantity(numValue >= 0 ? numValue : 0); // Prevent negative numbers
            }
          }}
          className={styles['quantity-input']}
          type="number"
          min={0}
        />
        <button onClick={incrementQuantity}>+</button>
      </div>
      <button onClick={handleButtonClick} className={styles['button-add']}>
        Add to cart
      </button>
    </div>
  );
}
