import { getCartCount } from './cart.js';

const updateCartCounter = () => {
  const cartCountSpan = document.querySelector('.name-cart');
  if (cartCountSpan) {
    const count = getCartCount();
    cartCountSpan.textContent = `Cart (${count})`;
  }
};

// Update on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateCartCounter);
} else {
  updateCartCounter();
}

// Update when cart changes
window.addEventListener('cart-updated', updateCartCounter);
