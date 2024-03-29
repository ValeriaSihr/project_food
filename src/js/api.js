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
// getAllProducts().then(console.log);

export const getPopularProducts = async () => {
  const endpoint = '/products/popular';
  return await fetchProducts(endpoint);
};
// getPopularProducts().then(console.log);

export const getDiscountProducts = async () => {
  const endpoint = '/products/discount';
  const data = await fetchProducts(endpoint);
  const random = data.toSorted(() => Math.random() - 0.5).slice(0, 2);
  // console.log(random);
  return random;
  // return await fetchProducts(endpoint);
};
// getDiscountProducts().then(console.log);
// get only 2 prod randomly!
// if nothing else to do smart we are going to make beatiful shit

export const getProdById = async (id = '640c2dd963a319ea671e36ba') => {
  const endpoint = `/products/${id}`;
  return await fetchProducts(endpoint);
};
// getProdById('640c2dd963a319ea671e3861').then(console.log);
