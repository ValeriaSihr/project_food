const CART = 'cart';
export const addProduct = product => {
  const isEmpty = localStorage.getItem(CART);
  let prodArr;
  if (!isEmpty) {
    prodArr = [];
  } else {
    prodArr = JSON.parse(isEmpty);
  }
  prodArr.push(product);
  localStorage.setItem(CART, JSON.stringify(prodArr));
};
