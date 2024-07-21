import { mainCardsMarkup } from './mainCards';
import { renderCart } from './cartcontent';
import { popularProdMarkup } from './popularProducts';
import { discountProdMarkup } from './discountProducts';

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

  // to do from cards arter functions
  const popularCards = await popularProdMarkup();

  popularProducts.insertAdjacentElement('beforeend', popularCards);
  const titlePop = document.createElement('h2');
  titlePop.textContent = 'Popular Products';
  titlePop.classList.add('heading-pop');
  popularProducts.insertAdjacentElement('afterbegin', titlePop);

  const discountCards = await discountProdMarkup();

  discountProducts.insertAdjacentElement('beforeend', discountCards);
  const titleDisc = document.createElement('h2');
  titleDisc.textContent = 'Discount Products';
  titleDisc.classList.add('heading-disc');
  discountProducts.insertAdjacentElement('afterbegin', titleDisc);
}
console.log(document.title);
if (document.title === 'Food Boutique 💙💛') {
  render();
} else renderCart();
