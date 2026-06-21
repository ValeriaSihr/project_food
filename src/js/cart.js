const CART = 'cart';

const saveCart = cart => {
  localStorage.setItem(CART, JSON.stringify(cart));
};

const notifyCartUpdate = () => {
  window.dispatchEvent(
    new CustomEvent('cart-updated', {
      detail: { cart: getCart() },
    })
  );
};

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
  saveCart(prodArr);
  notifyCartUpdate();
};

export const removeProd = id => {
  const prodArr = getCart();
  const newProductArr = prodArr.filter(product => id !== product._id);
  saveCart(newProductArr);
  notifyCartUpdate();
};

export const removeOneProduct = id => {
  const prodArr = getCart();
  const index = prodArr.findIndex(product => product._id === id);

  if (index === -1) {
    return;
  }

  prodArr.splice(index, 1);
  saveCart(prodArr);
  notifyCartUpdate();
};

export const removeOneProd = id => {
  const prodArr = getCart();
  const index = prodArr.findIndex(product => product._id === id);

  if (index === -1) {
    return;
  }

  prodArr.splice(index, 1);
  saveCart(prodArr);
  notifyCartUpdate();
};

export const removeAllProducts = () => {
  localStorage.removeItem(CART);
  notifyCartUpdate();
};

export const isInCart = id => {
  const cart = getCart();
  return cart.some(product => product._id === id);
};

export const getCartCount = () => getCart().length;

// Calculate the total price of items in the cart
export const getCartTotal = () => {
  const cart = getCart();
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};
