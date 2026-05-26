import { mainCardsMarkup } from './mainCards';
import { renderCart } from './cartcontent';
import { popularProdMarkup } from './popularProducts';
import { discountProdMarkup } from './discountProducts';
import {
  getProductsPerPage,
  getSavedPage,
  initPagination,
  updatePagination,
} from './pagination';

const allProducts = document.querySelector('.main-cards');
const popularProducts = document.querySelector('.popular');
const discountProducts = document.querySelector('.discount');

let lastProductsLimit = getProductsPerPage();

const loadProductsPage = async (page = getSavedPage()) => {
  const limit = getProductsPerPage();
  let { cardList, totalPages, currentPage } = await mainCardsMarkup(page, limit);

  if (totalPages > 0 && page > totalPages) {
    ({ cardList, totalPages, currentPage } = await mainCardsMarkup(
      totalPages,
      limit
    ));
  }

  const existingList = allProducts.querySelector('.main-cards-list');

  if (existingList) {
    existingList.replaceWith(cardList);
  } else {
    allProducts.insertAdjacentElement('beforeend', cardList);
  }

  updatePagination(currentPage, totalPages);
};

const handleViewportChange = () => {
  const limit = getProductsPerPage();

  if (limit === lastProductsLimit) {
    return;
  }

  lastProductsLimit = limit;
  loadProductsPage(getSavedPage());
};

async function render() {
  const title = document.createElement('h2');
  title.textContent = 'All Products';
  title.classList.add('hiden-title');
  allProducts.insertAdjacentElement('afterbegin', title);

  initPagination(loadProductsPage);
  await loadProductsPage(getSavedPage());

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(handleViewportChange, 200);
  });

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

if (document.title === 'Food Boutique 💙💛') {
  render();
} else {
  renderCart();
}
