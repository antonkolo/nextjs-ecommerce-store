'use client';

import React from 'react';
import CartItem, { type RecordWithQuantity } from '../components/CartItem';

export type Props = {
  itemsList: RecordWithQuantity[];
};

export default function CartItemsList(props: Props) {
  return (
    <>
      {props.itemsList.map((item) => {
        return <CartItem record={item} key={`cart-item-${item.id}`} />;
      })}
    </>
  );
}
