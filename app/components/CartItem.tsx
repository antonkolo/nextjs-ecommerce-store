'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import {
  addRecordToCart,
  decrementItemQuantity,
  removeItemFromCookies,
} from '../../util/cookies';
import { type Record } from './RecordsList';

export type RecordWithQuantity = Record & {
  quantity: number;
};

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
    setSubtotal(record.quantity * Number(record.price));
  }

  return (
    <div>
      <div>
        <Image
          width={210}
          height={210}
          alt="Record sleeve photo"
          src={`/product-images/product-image-${record.id.toString()}.webp`}
        />
      </div>
      <div>
        <Link href={`/${record.id}`}>{record.title}</Link>
        <p>{record.artist}</p>
        <div>
          <button
            onClick={decrementQuantity}
            disabled={quantity === 0 ? true : false}
          >
            -
          </button>
          <input
            value={quantity}
            onChange={(event) => {
              const value = Number(event.target.value);
              if (value >= 0) {
                setQuantity(value);
              }
            }}
            type="number"
          />
          <button onClick={incrementQuantity}>+</button>
        </div>
      </div>
      <div>
        <button
          onClick={async () => {
            await removeItemFromCookies(record.id);
          }}
        >
          x
        </button>
        <p>{subtotal}</p>
      </div>
    </div>
  );
}
