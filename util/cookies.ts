'use server';
import { cookies } from 'next/headers';

export async function addRecordToCart(recordId: number, quantity: number) {
  const cartCookie = (await cookies()).get('cart');
  const itemCookieToAdd = { id: recordId, quantity: quantity };

  // 1. no cookies - create cookies, add record to cart with passed quantity
  if (!cartCookie) {
    (await cookies()).set('cart', JSON.stringify([itemCookieToAdd]));
    return;
  }

  // check if the record is in the cookies already
  const cartItemsArray: { id: number; quantity: number }[] = JSON.parse(
    cartCookie.value,
  );

  const cartItem = cartItemsArray.find((item) => item.id === recordId);

  // 2. cookies but no record id found [].push({id, quantity})
  if (!cartItem) {
    (await cookies()).set(
      'cart',
      JSON.stringify([...cartItemsArray, itemCookieToAdd]),
    );
    return;
  }

  // 3. cookies and record id found - adjust quantity
  cartItem.quantity += quantity;
  (await cookies()).set('cart', JSON.stringify(cartItemsArray));

  // const cartItemIndex = cartItemsArray.indexOf(cartItem);
  // if (cartItemIndex !== -1) {
  //   cartItemsArray[cartItemIndex]!.quantity += quantity;
  //   (await cookies()).set('cart', JSON.stringify(cartItemsArray));
  //   return;
  // }
}

export async function getCartItems() {
  const cartCookie = (await cookies()).get('cart');

  if (!cartCookie) {
    return [];
  }

  const cartItems: { id: number; quantity: number }[] = JSON.parse(
    cartCookie.value,
  );
  return cartItems;
}

export async function removeItemFromCookies(recordId: number) {
  const cartCookie = (await cookies()).get('cart');
  if (!cartCookie) {
    return;
  }
  const cartItems: { id: number; quantity: number }[] = JSON.parse(
    cartCookie.value,
  );

  const itemToRemove = cartItems.find((item) => item.id === recordId);
  if (!itemToRemove) {
    return;
  }

  const indexOfItem = cartItems.indexOf(itemToRemove);
  cartItems.splice(indexOfItem, 1);

  (await cookies()).set('cart', JSON.stringify(cartItems));
}

export async function decrementItemQuantity(recordId: number) {
  const cartCookie = (await cookies()).get('cart');
  if (!cartCookie) {
    return;
  }
  const cartItems: { id: number; quantity: number }[] = JSON.parse(
    cartCookie.value,
  );

  const itemToDecrement = cartItems.find((item) => item.id === recordId);
  if (!itemToDecrement) {
    return;
  }

  // if the quantity becomes 0 - remove
  if (itemToDecrement.quantity === 1) {
    const indexOfItem = cartItems.indexOf(itemToDecrement);
    cartItems.splice(indexOfItem, 1);
  } else {
    itemToDecrement.quantity -= 1;
  }

  // set the cart cookeis to the adjusted value
  (await cookies()).set('cart', JSON.stringify(cartItems));
}
