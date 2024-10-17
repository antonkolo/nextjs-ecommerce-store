import React from 'react';
import { getCartItems } from '../../util/cookies';
import hydrateCart from '../../util/hydrateCart';
import CartItemsList from '../components/CartItemsList';
import OrderSummary from '../components/OrderSummary';
import styles from './page.module.scss';

export default async function CartPage() {
  const cartItems = await getCartItems();
  const itemsList = await hydrateCart(cartItems);

  return (
    <div className={styles.wrapper}>
      <div className={styles['cart-items-wrapper']}>
        <CartItemsList itemsList={itemsList} />
      </div>
      <OrderSummary itemsList={itemsList} />
    </div>
  );
}
