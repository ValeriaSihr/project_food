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
getPopularProducts().then(console.log);

export const getDiscountProducts = async () => {
  const endpoint = '/products/discount';
  const data = await fetchProducts(endpoint);
  const random = data.sort(() => Math.random() * 2).slice(0, 2);
  console.log(random);
  return random;
  // return await fetchProducts(endpoint);
};
getDiscountProducts().then(console.log);
// get only 2 prod randomly!
