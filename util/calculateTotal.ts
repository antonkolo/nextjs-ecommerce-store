import { RecordWithQuantity } from '../app/components/CartItem';

export default function calculateTotal(items: RecordWithQuantity[]) {
  return items.reduce((accumulator, item) => {
    return accumulator + item.quantity * Number(item.price);
  }, 0);
}
