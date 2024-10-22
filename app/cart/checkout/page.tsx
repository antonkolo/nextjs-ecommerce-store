import React from 'react';
import calculateTotal from '../../../util/calculateTotal';
import { getCartItems } from '../../../util/cookies';
import hydrateCart from '../../../util/hydrateCart';
import CheckoutForm from '../../components/CheckoutForm';
import styles from './page.module.scss';

export default async function CheckoutPage() {
  const cartItems = await getCartItems();
  const itemsList = await hydrateCart(cartItems);
  const total = calculateTotal(itemsList);
  return (
    <div className={styles.wrapper}>
      <div className={styles['total-wrapper']}>
        <p>Total</p>
        <p>{total}$</p>
      </div>

      <CheckoutForm />
    </div>
  );
}
