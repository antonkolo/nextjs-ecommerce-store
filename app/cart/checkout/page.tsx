import React from 'react';
import calculateTotal from '../../../util/calculateTotal';
import { getCartItems } from '../../../util/cookies';
import hydrateCart from '../../../util/hydrateCart';
import CheckoutForm from '../../components/CheckoutForm';
import styles from './page.module.scss';

const cartItems = await getCartItems();
console.log('cartItems', cartItems);
const itemsList = await hydrateCart(cartItems);

export default function CheckoutPage() {
  const total = calculateTotal(itemsList);
  return (
    <div className={styles.wrapper}>
      <p>Total</p>
      <p>{total}</p>
      <CheckoutForm />
    </div>
  );
}
