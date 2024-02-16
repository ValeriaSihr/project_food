import { getProdById } from './api';

const modal = document.querySelector('[data-modal]');
const btnClose = document.querySelector('.close-modal');

const closeModal = () => {
  modal.classList.add('is-hidden');
};

btnClose.addEventListener('click', closeModal);

export const openModal = async id => {
  modal.classList.remove('is-hidden');

  const product = await getProdById(id);

  const { category, img, is10PercentOff, name, popularity, price, size } =
    product;
  const picture = document.createElement('img');
  picture.src = img;
  picture.alt = name;
  picture.classList.add('card-img');

  const cost = document.createElement('p');
  cost.innerHTML = is10PercentOff
    ? `<span class="old-price">${Math.round(price / 0.9, 2)}</span> ${price}`
    : price;

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.textContent = 'Add to';
  const cartSvg = document.createElement('svg');
  const useSvg = document.createElement('use');
  useSvg.setAttribute(
    'href',
    '../img/icons.svg#icon-heroicons-solid_shopping-cart'
  );
  // useSvg.href = '../img/icons.svg#icon-heroicons-solid_shopping-cart'; can be used sometimes
  cartSvg.insertAdjacentElement('beforeend', useSvg);
  button.insertAdjacentElement('beforeend', cartSvg);

  console.log(product.name);
};
// name(h3), descr, categories
