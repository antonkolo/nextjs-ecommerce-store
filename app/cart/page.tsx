import { cookies } from 'next/headers';
import React from 'react';
import { getRecordInsecure } from '../../database/records';
import CartItem from '../components/CartItem';
import { Record } from '../components/RecordsList';

type ReturnedRecord = Record | undefined;

export default async function CartPage() {
  const record: ReturnedRecord = await getRecordInsecure(1);
  const cookieStore = await cookies();
  const cart = cookieStore.get('cart');
  console.log(cart);

  return (
    <>
      <h1>Cart</h1>
      <div>
        <CartItem record={record} />
      </div>
    </>
  );
}
