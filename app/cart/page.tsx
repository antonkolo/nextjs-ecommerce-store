import React from 'react';
import { getCartItems } from '../../util/cookies';
import hydrateCart from '../../util/hydrateCart';
import CartItemsList from '../components/CartItemsList';

export default async function CartPage() {
  const cartItems = await getCartItems();
  const itemsList = await hydrateCart(cartItems);

  return (
    <div>
      <CartItemsList itemsList={itemsList} />
    </div>
  );
}
