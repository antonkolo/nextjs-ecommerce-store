'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  addRecordToCart,
  decrementItemQuantity,
  removeItemFromCookies,
  setItemQuantity,
} from '../../util/cookies';
import styles from './CartItem.module.scss';
import { type Record } from './RecordsList';

// types
export type RecordWithQuantity = Record & {
  quantity: number;
};

// functions
function calculateSubtotal(price: string, quantity: number) {
  return quantity * Number(price);
}

export default function CartItem({ record }: { record: RecordWithQuantity }) {
  const [quantity, setQuantity] = useState(record.quantity);

  const [subtotal, setSubtotal] = useState(
    calculateSubtotal(record.price, record.quantity),
  );

  // functions
  async function incrementQuantity() {
    await addRecordToCart(record.id, 1);
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setSubtotal(calculateSubtotal(record.price, newQuantity));
  }

  async function decrementQuantity() {
    await decrementItemQuantity(record.id);
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    setSubtotal(calculateSubtotal(record.price, newQuantity));
  }

  function handleQuantityChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuantity = Math.max(0, parseInt(event.target.value, 10) || 0);
    setQuantity(newQuantity);
    setSubtotal(calculateSubtotal(record.price, newQuantity));
  }

  async function handleQuantityBlur() {
    if (quantity > 0) {
      await setItemQuantity(record.id, quantity);
    } else {
      // Reset to original quantity if input is invalid
      const originalQuantity = record.quantity;
      setQuantity(originalQuantity);
      setSubtotal(calculateSubtotal(record.price, originalQuantity));
    }
  }

  return (
    <div className={styles['item-wrapper']}>
      <div className={styles['item-wrapper-left']}>
        <div>
          <Image
            width={210}
            height={210}
            alt="Record sleeve photo"
            src={`/product-images/product-image-${record.id.toString()}.webp`}
          />
        </div>

        <div className={styles['name-controls-wrapper']}>
          <div className={styles['item-title-wrapper']}>
            <Link href={`/${record.id}`}>{record.title}</Link>
            <p>{record.artist}</p>
          </div>
          <div className={styles['controls-wrapper']}>
            <button
              onClick={decrementQuantity}
              disabled={quantity === 0 ? true : false}
            >
              -
            </button>
            <input
              value={quantity.toString()}
              onChange={handleQuantityChange}
              onBlur={handleQuantityBlur}
              type="number"
              min="0" // Ensure the number is not negative
            />
            <button onClick={incrementQuantity}>+</button>
          </div>
        </div>
      </div>
      <div className={styles['item-wrapper-right']}>
        <button
          onClick={async () => {
            await removeItemFromCookies(record.id);
          }}
        >
          x
        </button>
        <p className={styles.subtotal}>{subtotal}$</p>
      </div>
    </div>
  );
}
