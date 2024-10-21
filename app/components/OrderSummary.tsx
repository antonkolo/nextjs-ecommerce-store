'use client';

import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import calculateTotal from '../../util/calculateTotal';
import { type Props } from './CartItemsList';
import styles from './OrderSummary.module.scss';

export default function OrderSummary(props: Props) {
  const router = useRouter();
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('Sending');

    router.replace('/cart/checkout');
  }

  const total = calculateTotal(props.itemsList);
  return (
    <div className={styles.container}>
      <div className={styles['total-wrapper']}>
        <h2 className={styles.title}>Total</h2>
        <p className={styles['price-text']}>{total}$</p>
      </div>
      <form onSubmit={handleSubmit}>
        <button className={styles.button}>Order now</button>
      </form>
    </div>
  );
}
