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

export const getAllProducts = async () => {
  const endpoint = '/products';
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

'Dear JavaScript! I love you so much! Please, forgive me that I`m so stupid and lazy((  I really try to understand you, but I am too stupid, please, help me. Love you.';