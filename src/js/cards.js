import { getAllProducts } from './api';
import { getPopularProducts } from './api';
import { getDiscountProducts } from './api';
import { openModal } from './modal';

export const mainCardsMarkup = async () => {
  const { results } = await getAllProducts();

  const markup = results
    .map(
      ({ category, img, is10PercentOff, name, popularity, price, size, _id }) =>
        `<li class="list-card-style" data-product-id="${_id}">
        
          <svg class="disc-icon-svg ${
            is10PercentOff ? 'icon-visible' : 'icon-hidden'
          }" width="60" height="60">
              <use href="../img/icons.svg#icon-discount"></use>
            </svg> 
        
  <div class="card-img"><img class="picture" src="${img}" alt="${name}" /></div>
  <div class="description">
    <h3 class="product-name">${name}</h3>

    <span class="prod-info">Category: </span><span class="prod-info-api"> ${category
      .split('_')
      .join(' ')}</span>
    <span class="prod-info">Size: </span><span class="prod-info-api"> ${size}</span>
    <span class="prod-info">Popularity: </span><span class="prod-info-api"> ${popularity}</span>
  </div>
  <div class="to-cart">
    <p class="price"> &dollar;${price}</p>
    <button class="cart-btn" type="button">
      <svg class="cart-svg" width="18" height="18">
        <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use>
      </svg>
    </button>
  </div>
</li>`
    )
    .join('');

  const cardList = document.createElement('ul');
  // cardList.insertAdjacentHTML('beforeend', markup);
  cardList.innerHTML = markup;
  // cardList.addEventListener('click', event => {
  //   if (event.target.nodeName === 'UL') {
  //     return;
  //   }
  //   if (
  //     event.target.nodeName === 'BUTTON' ||
  //     event.target.nodeName === 'svg' ||
  //     event.target.nodeName === 'use'
  //   ) {
  //     return;
  //   }
  //   const liArr = cardList.querySelectorAll('.list-card-style');

  //   console.log(event.currentTarget);
  //   openModal();
  // });
  const liArr = cardList.querySelectorAll('.list-card-style');
  liArr.forEach(li => {
    li.addEventListener('click', event => {
      if (
        event.target.nodeName === 'BUTTON' ||
        event.target.nodeName === 'svg' ||
        event.target.nodeName === 'use'
      ) {
        return;
      }
      const productId = li.dataset.productId;
      openModal(productId);
    });
  });
  return cardList;
};
// повісити айді і додати слухача
export const popularProdMarkup = async () => {
  const results = await getPopularProducts();
  // console.log(results);
  const markup = results
    .map(
      ({
        category,
        img,
        is10PercentOff,
        name,
        popularity,
        price,
        size,
        _id,
      }) => `<li class="popular-card-style">
  <div class="popular-img"><img class="pop-picture" src="${img}" alt="${name}" /></div>
  
  <div class="popular-description">
    <h3 class="product-name">${name}</h3>
    
      <span class="prod-info">Category: </span><span class="prod-info-api">${category
        .split('_')
        .join(' ')}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${size}</span>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${popularity}</span>
    
  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `
    )
    .join('');
  const popularProdList = document.createElement('ul');
  popularProdList.innerHTML = markup;
  return popularProdList;
};

export const discountProdMarkup = async () => {
  const results = await getDiscountProducts();
  const markup = results
    .map(
      ({ category, img, is10PercentOff, name, popularity, price, size, _id }) =>
        `<li class="discount-svg">
        <div>
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#icon-discount"></use>
</svg>
</div>
  <div class="card-img"><img src="${img}" alt="${name}" /></div>
  <div>
    <h3 class="product-name">${name}</h3>
  </div>
  <div class="to-cart">
    <p class="discount-price">&dollar;${price}</p>
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `
    )
    .join('');
  const discountProdList = document.createElement('ul');
  discountProdList.innerHTML = markup;
  return discountProdList;
};