import { addProduct } from './cart';

addProduct();

const fillCart = product => {
  const {
    category,
    img,
    is10PercentOff,
    name,
    desc,
    popularity,
    price,
    size,
    _id,
  } = product;

  const cartContent = document.createElement('div');
};
