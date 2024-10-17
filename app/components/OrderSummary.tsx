'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import calculateTotal from '../../util/calculateTotal';
import { type Props } from './CartItemsList';

export default function OrderSummary(props: Props) {
  const router = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Sending');

    router.replace('/cart/checkout');
  }

  const total = calculateTotal(props.itemsList);
  return (
    <div>
      <div>
        <h2>Total</h2>
        <p>{total}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <button>Order now</button>
      </form>
    </div>
  );
}
