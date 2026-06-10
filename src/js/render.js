import { mainCardsMarkup } from './mainCards';
import { renderCart } from './cartcontent';
import { popularProdMarkup } from './popularProducts';
import { discountProdMarkup } from './discountProducts';
import { getFilters, initFilters } from './filters';
import {
  getProductsPerPage,
  getSavedPage,
  initPagination,
  updatePagination,
} from './pagination';

const allProducts = document.querySelector('.main-cards');
const popularProducts = document.querySelector('.popular');
const discountProducts = document.querySelector('.discount');
const paginationSection = document.querySelector('.pagination');

let lastProductsLimit = getProductsPerPage();

const replaceMainCardsContent = cardList => {
  allProducts.querySelector('.main-cards-list')?.remove();
  allProducts.querySelector('.filters-empty')?.remove();
  allProducts.insertAdjacentElement('beforeend', cardList);
};

const togglePagination = totalPages => {
  if (!paginationSection) {
    return;
  }

  paginationSection.style.display = totalPages > 0 ? '' : 'none';
};

const loadProductsPage = async (page = getSavedPage()) => {
  const limit = getProductsPerPage();
  const filters = getFilters();
  let { cardList, totalPages, currentPage } = await mainCardsMarkup(
    page,
    limit,
    filters
  );

  if (totalPages > 0 && page > totalPages) {
    ({ cardList, totalPages, currentPage } = await mainCardsMarkup(
      totalPages,
      limit,
      filters
    ));
  }

  replaceMainCardsContent(cardList);
  togglePagination(totalPages);
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
  initFilters(loadProductsPage);
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
