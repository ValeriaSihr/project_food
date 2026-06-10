import { getCart } from './cart.js';

const checkoutForm = document.getElementById('checkout-form');
const orderModal = document.querySelector('[data-order-modal]');
const orderCloseBtn = document.querySelector('[data-order-close]');

if (checkoutForm) {
  checkoutForm.addEventListener('submit', handleCheckout);
}

if (orderCloseBtn) {
  orderCloseBtn.addEventListener('click', handleOrderClose);
}

orderModal?.addEventListener('click', (e) => {
  if (e.target === orderModal) {
    handleOrderClose();
  }
});

async function handleCheckout(e) {
  e.preventDefault();

  const emailInput = checkoutForm.querySelector('input[name="checkout-email"]');
  const email = emailInput.value.trim();
  const cart = getCart();

  if (!email) {
    alert('Please enter an email address');
    return;
  }

  if (cart.length === 0) {
    alert('Your cart is empty');
    return;
  }

  try {
    const order = {
      email,
      items: cart,
      orderDate: new Date().toISOString(),
    };

    localStorage.setItem('lastOrder', JSON.stringify(order));
    localStorage.setItem('cart', JSON.stringify([]));

    showOrderModal();
    emailInput.value = '';
  } catch (error) {
    console.error('Checkout error:', error);
    alert('An error occurred. Please try again.');
  }
}

function showOrderModal() {
  orderModal?.classList.remove('is-hidden');
}

function handleOrderClose() {
  closeOrderModal();
  // Reload page to refresh cart display
  location.reload();
}

function closeOrderModal() {
  orderModal?.classList.add('is-hidden');
}
