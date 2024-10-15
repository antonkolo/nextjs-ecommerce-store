'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Record } from './RecordsList';

export default function CartItem({ record }: { record: Record }) {
  const [quantity, setQuantity] = useState(0);

  // functions
  function incrementQuantity() {
    setQuantity(quantity + 1);
  }

  function decrementQuantity() {
    setQuantity(quantity - 1);
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
              const value = event.target.value;
              setQuantity(Number(value));
            }}
            type="number"
          />
          <button onClick={incrementQuantity}>+</button>
        </div>
      </div>
      <div>
        <button>x</button>
        <p>{record.price}</p>
      </div>
    </div>
  );
}
