import { getCart } from './cart';

const cart = getCart();
console.log(cart);
cart.length > 0 ? fillCartContent() : emptyCartContent();

function fillCartContent() {
  console.log('full');
}

function emptyCartContent() {
  console.log('empty');
}
