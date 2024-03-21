const CART = 'cart';
export const getCart = () => {
  const shoppingCart = localStorage.getItem(CART);

  if (!shoppingCart) {
    return [];
  }
  return JSON.parse(shoppingCart);
};

export const addProduct = product => {
  const prodArr = getCart();
  prodArr.push(product);
  localStorage.setItem(CART, JSON.stringify(prodArr));
};

export const removeProd = id => {
  const prodArr = getCart();
  const newProductArr = prodArr.filter(product => id !== product._id);
  localStorage.setItem(CART, JSON.stringify(newProductArr));
};

export const removeAllProducts = () => {
  localStorage.removeItem(CART);
};
// підключити до корзини
