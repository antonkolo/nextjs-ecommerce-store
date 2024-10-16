'use client';

import React from 'react';
import CartItem, { type RecordWithQuantity } from '../components/CartItem';

type Props = {
  itemsList: RecordWithQuantity[];
};

export default function CartItemsList(props: Props) {
  return (
    <>
      <h1>Cart</h1>
      <div>
        {props.itemsList.map((item) => {
          return <CartItem record={item} key={`cart-item-${item.id}`} />;
        })}
        {/* <CartItem record={record} /> */}
      </div>
    </>
  );
}
