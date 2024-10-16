import { RecordWithQuantity } from '../app/components/CartItem';
import { getRecordInsecure } from '../database/records';

// gets an array of cart item object, returs an array of records from the database with their respective quantity
export default async function hydrateCart(
  cartItems: { id: number; quantity: number }[],
) {
  const recordsList: RecordWithQuantity[] = [];
  // for each item
  for (const cartItem of cartItems) {
    const record = await getRecordInsecure(cartItem.id);
    if (record) {
      recordsList.push({ ...record, quantity: cartItem.quantity });
    }

    // add quantity property & push to the return array
  }

  return recordsList;
}
