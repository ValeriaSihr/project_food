import { updBtn } from './cards';
import { addProduct, isInCart, removeProd } from './cart';

export const createContent = product => {
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
  const picture = document.createElement('img');
  picture.src = img;
  picture.alt = name;
  picture.classList.add('card-img-modal');

  console.log(product);

  const cost = document.createElement('p');
  cost.innerHTML = is10PercentOff
    ? `<span class="old-price">&dollar;${(price / 0.9).toFixed(
        2
      )}</span>&dollar;${price}`
    : `&dollar;${price}`;
  cost.classList.add('price-modal');
  // to make dicsount visible

  const isProductInCart = isInCart(_id);
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.textContent = isProductInCart ? 'Remove from' : 'Add to';
  button.classList.add('cart-add');
  const cartSvg = document.createElement('svg');
  cartSvg.setAttribute('width', '20px');
  const useSvg = document.createElement('use');
  useSvg.setAttribute('href', '../img/icons.svg#shopping-cart');

  const modalBtnUpd = () => {
    const isProductInCart = isInCart(_id);
    if (!isProductInCart) {
      button.textContent = 'Remove from';
      updBtn(_id, !isProductInCart);
      return addProduct(product);
    }
    button.textContent = 'Add to';
    updBtn(_id, !isProductInCart);
    return removeProd(_id);
  };

  button.addEventListener('click', modalBtnUpd);

  cartSvg.insertAdjacentElement('beforeend', useSvg);
  button.insertAdjacentElement('beforeend', cartSvg);
  cartSvg.classList.add('cart-svg-modal');
  useSvg.classList.add('cart-use');

  const pricingWrapper = document.createElement('div');
  pricingWrapper.insertAdjacentElement('beforeend', cost);
  pricingWrapper.insertAdjacentElement('beforeend', button);
  pricingWrapper.classList.add('div-price');

  const title = document.createElement('h3');
  title.textContent = name;
  title.classList.add('product-name');

  const description = document.createElement('p');
  description.textContent = desc;
  description.classList.add('modal-text');

  const categorySpan = document.createElement('span');
  const categoryValueSpan = document.createElement('span');

  categorySpan.textContent = 'Category: ';
  categoryValueSpan.textContent = category.split('_').join(' ');
  categorySpan.classList.add('prod-info-modal');
  categoryValueSpan.classList.add('prod-info-api-modal');

  const prodSize = document.createElement('span');
  const prodValueSize = document.createElement('span');

  prodSize.textContent = 'Size: ';
  prodValueSize.textContent = size;
  prodSize.classList.add('prod-info-modal');
  prodValueSize.classList.add('prod-info-api-modal');

  const prodPopularity = document.createElement('span');
  const popularityValue = document.createElement('span');

  prodPopularity.textContent = 'Popularity: ';
  popularityValue.textContent = popularity;
  prodPopularity.classList.add('prod-info-modal');
  popularityValue.classList.add('prod-info-api-modal');

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  wrapper.insertAdjacentElement('beforeend', picture);
  wrapper.insertAdjacentElement('beforeend', title);
  wrapper.insertAdjacentElement('beforeend', categorySpan);
  wrapper.insertAdjacentElement('beforeend', categoryValueSpan);
  wrapper.insertAdjacentElement('beforeend', prodSize);
  wrapper.insertAdjacentElement('beforeend', prodValueSize);
  wrapper.insertAdjacentElement('beforeend', prodPopularity);
  wrapper.insertAdjacentElement('beforeend', popularityValue);
  wrapper.insertAdjacentElement('beforeend', description);
  wrapper.insertAdjacentElement('beforeend', pricingWrapper);
  //wrapper.insertAdjacentElement('beforeend', button);

  return wrapper;
};
