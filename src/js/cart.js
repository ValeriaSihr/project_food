const CART = 'cart';

const saveCart = cart => {
  localStorage.setItem(CART, JSON.stringify(cart));

  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('cart-updated', {
        detail: { cart },
      })
    );
  }
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
};

export const removeProd = id => {
  const prodArr = getCart();
  const newProductArr = prodArr.filter(product => id !== product._id);
  saveCart(newProductArr);
};

export const removeOneProduct = id => {
  const prodArr = getCart();
  const index = prodArr.findIndex(product => product._id === id);

  if (index === -1) {
    return;
  }

  prodArr.splice(index, 1);
  saveCart(prodArr);
};

export const removeAllProducts = () => {
  localStorage.removeItem(CART);

  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('cart-updated', {
        detail: { cart: [] },
      })
    );
  }
};
// підключити до корзини

export const isInCart = id => {
  const cart = getCart();
  return cart.some(product => product._id === id);
};

export const getCartCount = () => getCart().length;
