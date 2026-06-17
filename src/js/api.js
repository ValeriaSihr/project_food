import axios from 'axios';
// axios.defaults.baseURL = 'https://food-boutique.b.goit.study/api'; перевизначає базовий URL globaly
const apiFoodBoutique = axios.create({
  baseURL: 'https://food-boutique.b.goit.study/api',
});

const fetchProducts = async endpoint => {
  try {
    const { data } = await apiFoodBoutique(endpoint);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const ALL_PRODUCTS_LIMIT = 540;

const getApiSortParams = sort => {
  switch (sort) {
    case 'az':
      return { byABC: true };
    case 'za':
      return { byABC: false };
    case 'price-low-high':
      return { byPrice: true };
    case 'price-high-low':
      return { byPrice: false };
    case 'popularity':
      return { byPopularity: false };
    default:
      return {};
  }
};

const buildProductsParams = ({ page, limit, keyword, category, sort }) => {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  if (keyword) {
    params.set('keyword', keyword);
  }

  if (category && category !== 'show-all') {
    params.set('category', category);
  }

  Object.entries(getApiSortParams(sort)).forEach(([key, value]) => {
    params.set(key, String(value));
  });

  return params;
};

export const getProductsByParams = async ({
  page = 1,
  limit = 9,
  keyword = '',
  category = '',
  sort = '',
} = {}) => {
  if (sort === 'newest' || sort === 'oldest') {
    const params = buildProductsParams({
      page: 1,
      limit: ALL_PRODUCTS_LIMIT,
      keyword,
      category,
      sort: '',
    });
    const data = await fetchProducts(`/products?${params.toString()}`);

    if (!data?.results?.length) {
      return data;
    }

    const sorted = [...data.results].sort((a, b) =>
      sort === 'newest'
        ? b._id.localeCompare(a._id)
        : a._id.localeCompare(b._id)
    );

    const totalPages = Math.ceil(sorted.length / limit) || 0;
    const start = (page - 1) * limit;

    return {
      page,
      perPage: limit,
      totalPages,
      results: sorted.slice(start, start + limit),
    };
  }

  const params = buildProductsParams({ page, limit, keyword, category, sort });
  return await fetchProducts(`/products?${params.toString()}`);
};

export const getAllProducts = async (page = 1, limit = 9) =>
  getProductsByParams({ page, limit });

export const getProductsCategories = async () => {
  const endpoint = '/products/categories';
  return await fetchProducts(endpoint);
};

export const getPopularProducts = async () => {
  const endpoint = '/products/popular';
  return await fetchProducts(endpoint);
};

export const getDiscountProducts = async () => {
  const endpoint = '/products/discount';
  const data = await fetchProducts(endpoint);
  const random = data.toSorted(() => Math.random() - 0.5).slice(0, 2);

  return random;
};

export const getProdById = async (id = '640c2dd963a319ea671e36ba') => {
  const endpoint = `/products/${id}`;
  return await fetchProducts(endpoint);
};

export const subscribeEmail = async email => {
  const subscribers = JSON.parse(localStorage.getItem('subscribers') || '[]');

  if (subscribers.includes(email)) {
    return { status: 'conflict', message: 'Email already exists' };
  }

  subscribers.push(email);
  localStorage.setItem('subscribers', JSON.stringify(subscribers));

  return { status: 'success', message: 'Subscribed successfully' };
};

