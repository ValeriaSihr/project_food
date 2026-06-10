import { subscribeEmail } from './api.js';

const form = document.querySelector('.form');
const subscribeModal = document.querySelector('[data-subscribe-modal]');
const subscribeCloseBtn = document.querySelector('[data-subscribe-close]');
const subscribeSuccessBlock = document.getElementById('subscribe-success');
const subscribeErrorBlock = document.getElementById('subscribe-error');

if (form) {
  form.addEventListener('submit', handleSubscribe);
}

if (subscribeCloseBtn) {
  subscribeCloseBtn.addEventListener('click', closeSubscribeModal);
}

subscribeModal?.addEventListener('click', (e) => {
  if (e.target === subscribeModal) {
    closeSubscribeModal();
  }
});

async function handleSubscribe(e) {
  e.preventDefault();

  const emailInput = form.querySelector('input[name="subscribe"]');
  const email = emailInput.value.trim();

  if (!email) {
    alert('Please enter an email address');
    return;
  }

  try {
    const response = await subscribeEmail(email);

    if (response.status === 'conflict') {
      showSubscribeModal('error');
    } else if (response.status === 'success') {
      showSubscribeModal('success');
      emailInput.value = '';
    }
  } catch (error) {
    console.error('Subscription error:', error);
    alert('An error occurred. Please try again.');
  }
}

function showSubscribeModal(type) {
  if (!subscribeModal) return;

  subscribeSuccessBlock.classList.add('is-hidden');
  subscribeErrorBlock.classList.add('is-hidden');

  if (type === 'success') {
    subscribeSuccessBlock.classList.remove('is-hidden');
  } else if (type === 'error') {
    subscribeErrorBlock.classList.remove('is-hidden');
  }

  subscribeModal.classList.remove('is-hidden');
}

function closeSubscribeModal() {
  subscribeModal?.classList.add('is-hidden');
}
