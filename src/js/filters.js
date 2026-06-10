import { getProductsCategories } from './api';

const searchInput = document.querySelector('#search');
const categorySelect = document.querySelector('#category');
const sortSelect = document.querySelector('#sort');

const filtersState = {
  keyword: '',
  category: '',
  sort: '',
};

let onFiltersChange = null;

export const getFilters = () => ({ ...filtersState });

const formatCategoryLabel = category => category.split('_').join(' ');

const renderCategoryOptions = categories => {
  if (!categorySelect) {
    return;
  }

  categorySelect.innerHTML = `
    <option value="" disabled selected>Categories</option>
    <option value="show-all">Show all</option>
  `;

  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = formatCategoryLabel(category);
    categorySelect.append(option);
  });
};

const loadCategories = async () => {
  const categories = await getProductsCategories();

  if (categories?.length) {
    renderCategoryOptions(categories);
  }
};

export const initFilters = onChange => {
  onFiltersChange = onChange;

  if (!searchInput && !categorySelect && !sortSelect) {
    return;
  }

  loadCategories();

  const searchForm = searchInput?.closest('form');
  let debounceId;

  const applyFilters = () => {
    onFiltersChange?.(1);
  };

  const applySearch = () => {
    filtersState.keyword = searchInput?.value.trim() || '';
    applyFilters();
  };

  searchInput?.addEventListener('input', () => {
    clearTimeout(debounceId);
    debounceId = setTimeout(applySearch, 300);
  });

  searchForm?.addEventListener('submit', event => {
    event.preventDefault();
    clearTimeout(debounceId);
    applySearch();
  });

  categorySelect?.addEventListener('change', () => {
    const { value } = categorySelect;
    filtersState.category = value === 'show-all' || value === '' ? '' : value;
    applyFilters();
  });

  sortSelect?.addEventListener('change', () => {
    filtersState.sort = sortSelect.value || '';
    applyFilters();
  });
};
