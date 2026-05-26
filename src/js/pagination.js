const PAGES_VISIBLE = 4;
const CURRENT_PAGE_KEY = 'productsCurrentPage';
const DESKTOP_BREAKPOINT = '(min-width: 768px)';

export const PRODUCTS_PER_PAGE_MOBILE = 5;
export const PRODUCTS_PER_PAGE_DESKTOP = 9;

const pagesList = document.querySelector('.pages-list');
const paginationSection = document.querySelector('.pagination');
const turnPageButtons = document.querySelector('.turn-page-buttons');

let currentPage = 1;
let totalPages = 1;
let onPageChange = null;
let isInitialized = false;

export const getProductsPerPage = () =>
  window.matchMedia(DESKTOP_BREAKPOINT).matches
    ? PRODUCTS_PER_PAGE_DESKTOP
    : PRODUCTS_PER_PAGE_MOBILE;

export const getSavedPage = () => {
  const saved = Number(sessionStorage.getItem(CURRENT_PAGE_KEY));
  return saved > 0 ? saved : 1;
};

export const saveCurrentPage = page => {
  sessionStorage.setItem(CURRENT_PAGE_KEY, String(page));
};

const getPaginationItems = (page, total) => {
  if (total <= PAGES_VISIBLE) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  let start = page - Math.floor(PAGES_VISIBLE / 2);
  let end = start + PAGES_VISIBLE - 1;

  if (start < 1) {
    start = 1;
    end = PAGES_VISIBLE;
  }

  if (end > total) {
    end = total;
    start = total - PAGES_VISIBLE + 1;
  }

  const items = [];

  if (start > 1) {
    items.push(1);
    if (start > 2) {
      items.push('ellipsis');
    }
  }

  for (let i = start; i <= end; i += 1) {
    items.push(i);
  }

  if (end < total) {
    if (end < total - 1) {
      items.push('ellipsis');
    }
    items.push(total);
  }

  return items;
};

const placePaginationUnderList = () => {
  const list = document.querySelector('.main-cards-list');

  if (!list || !paginationSection || list.nextElementSibling === paginationSection) {
    return;
  }

  list.insertAdjacentElement('afterend', paginationSection);
};

const updateArrowButtons = () => {
  if (!turnPageButtons) {
    return;
  }

  const buttons = turnPageButtons.querySelectorAll('[data-action]');

  buttons.forEach(button => {
    const action = button.dataset.action;

    if (action === 'first' || action === 'prev') {
      button.disabled = currentPage <= 1;
      return;
    }

    if (action === 'next' || action === 'last') {
      button.disabled = currentPage >= totalPages;
    }
  });
};

const renderPageButtons = () => {
  if (!pagesList) {
    return;
  }

  const items = getPaginationItems(currentPage, totalPages);

  pagesList.innerHTML = items
    .map(item => {
      if (item === 'ellipsis') {
        return '<li class="pages-item pages-ellipsis">...</li>';
      }

      const isActive = item === currentPage;

      return `<li class="pages-item">
        <button
          type="button"
          class="pages-btn${isActive ? ' pages-btn-active' : ''}"
          data-page="${item}"
          aria-label="Page ${item}"
          ${isActive ? 'aria-current="page"' : ''}
        >
          ${item}
        </button>
      </li>`;
    })
    .join('');

  pagesList.querySelectorAll('[data-page]').forEach(button => {
    button.addEventListener('click', () => {
      const page = Number(button.dataset.page);

      if (page !== currentPage) {
        onPageChange?.(page);
      }
    });
  });
};

export const updatePagination = (page, total) => {
  currentPage = page;
  totalPages = total;
  saveCurrentPage(page);

  placePaginationUnderList();
  renderPageButtons();
  updateArrowButtons();
};

const handleArrowClick = event => {
  const button = event.target.closest('[data-action]');

  if (!button || button.disabled) {
    return;
  }

  const action = button.dataset.action;
  let nextPage = currentPage;

  switch (action) {
    case 'first':
      nextPage = 1;
      break;
    case 'prev':
      nextPage = currentPage - 1;
      break;
    case 'next':
      nextPage = currentPage + 1;
      break;
    case 'last':
      nextPage = totalPages;
      break;
    default:
      return;
  }

  if (nextPage !== currentPage) {
    onPageChange?.(nextPage);
  }
};

export const initPagination = callback => {
  onPageChange = callback;

  if (isInitialized) {
    return;
  }

  isInitialized = true;
  placePaginationUnderList();

  if (turnPageButtons) {
    turnPageButtons.addEventListener('click', handleArrowClick);
  }
};
