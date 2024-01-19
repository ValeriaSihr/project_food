import { mainCardsMarkup } from './cards';

const allProducts = document.querySelector('.main-cards');
const popularProducts = document.querySelector('.popular');
const discountProducts = document.querySelector('.discount');

async function render() {
  const mainCards = await mainCardsMarkup();

  allProducts.insertAdjacentElement('beforeend', mainCards);
  const title = document.createElement('h2');
  title.textContent = 'All Products';
  title.classList.add('hiden-title');
  allProducts.insertAdjacentElement('afterbegin', title);
}
render();
