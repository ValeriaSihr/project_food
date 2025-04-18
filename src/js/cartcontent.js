import { getCart } from './cart';

const cartTitle = document.querySelector('.prod-cart-title');
const cartContent = document.querySelector('.cart-content')
console.log(cartContent);

function fullCartContent() {
  console.log('full');
}

function emptyCartContent() {
  console.log('empty');
}

export function renderCart() {
  const cart = getCart();
  cartTitle.textContent = `CART (${cart.length})`;
  cart.length > 0 ? fullCartContent() : emptyCartContent();
  cartContent.insertAdjacentHTML('beforeend', () => {
    const cartMarkup = cart.map(product => {
      return `<li></li>`
    })
  })

}

