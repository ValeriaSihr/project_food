import { getAllProducts } from './api';
import { getPopularProducts } from './api';
import { getDiscountProducts } from './api';
import { addProduct, isInCart, removeProd } from './cart';
import { openModal } from './modal';

const allCards = document.querySelector('.all-cards');

export function updBtn(id, isInCart = false) {
  const cards = allCards.querySelectorAll(`[data-product-id="${id}"]`);
  if (!cards.length) return;

  cards.forEach(card => {
    const icon = card.querySelector('button');
    icon.children[0].children[0].setAttribute(
      'href',
      `./img/icons.svg#${isInCart ? 'check' : 'shopping-cart'}`
    );
  });
}

export const mainCardsMarkup = async () => {
  const { results } = await getAllProducts();

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
      }) => {
        // const productInCart = isInCart(_id);
        return `<li class="list-card-style" data-product-id="${_id}">
        
          <svg class="disc-icon-svg ${
            is10PercentOff ? 'icon-visible' : 'icon-hidden'
          }" width="60" height="60">
              <use href="../img/icons.svg#discount"></use>
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
        <use href='./img/icons.svg#shopping-cart'
        ></use>
      </svg>
    </button>
  </div>
</li>`;
      }
    )
    .join('');

  const cardList = document.createElement('ul');
  // cardList.insertAdjacentHTML('beforeend', markup);
  cardList.innerHTML = markup;

  const liArr = cardList.querySelectorAll('.list-card-style');
  liArr.forEach(li => {
    li.addEventListener('click', event => {
      const productId = li.dataset.productId;
      if (
        event.target.nodeName === 'BUTTON' ||
        event.target.nodeName === 'svg' ||
        event.target.nodeName === 'use'
      ) {
        const product = results.find(item => item._id === productId);

        if (!isInCart(productId)) {
          addProduct(product);
          updBtn(productId, true);

          return;
        }

        removeProd(productId);
        updBtn(productId, false);
        return;
      }

      openModal(productId);
    });
  });
  return cardList;
};

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
      }) => `<li class="popular-card-style" data-product-id="${_id}">
      <div class="popular-card">
  <div class="popular-img"><img class="pop-picture" src="${img}" alt="${name}" /></div>
  
  <div class="popular-description">
    <h3 class="product-name-pop">${name}</h3>
    
      <span class="prod-info">Category: </span><span class="prod-info-api">${category
        .split('_')
        .join(' ')}</span>
      <span class="prod-info">Size: </span><span class="prod-info-api">${size}</span><br>
      <span class="prod-info">Popularity: </span><span class="prod-info-api">${popularity}</span>
    
  </div>
  <div class="popular-btn">
    <button class="popular-btn-cart" type="button">
    <svg class="popular-btn-svg" >
    <use href="./img/icons.svg#shopping-cart"></use></svg>
    </button>
  </div>
  </div>
</li>
  `
    )
    .join('');
  const popularProdList = document.createElement('ul');
  popularProdList.innerHTML = markup;
  const popCardArr = popularProdList.querySelectorAll('.popular-card-style');
  popCardArr.forEach(li => {
    li.addEventListener('click', event => {
      const productId = li.dataset.productId;
      if (
        event.target.nodeName === 'BUTTON' ||
        event.target.nodeName === 'svg' ||
        event.target.nodeName === 'use'
      ) {
        const product = results.find(item => item._id === productId);
        if (!isInCart(productId)) {
          addProduct(product);
          updBtn(productId, true);

          return;
        }

        removeProd(productId);
        updBtn(productId, false);
        return;
      }

      openModal(productId);
    });
  });

  return popularProdList;
};

export const discountProdMarkup = async () => {
  const results = await getDiscountProducts();
  const markup = results
    .map(
      ({ category, img, is10PercentOff, name, popularity, price, size, _id }) =>
        `<li class="discount-svg" data-product-id="${_id}">
        <div>
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#discount"></use>
</svg>
</div>
  <div class="card-img"><img src="${img}" alt="${name}" /></div>
  <div class="discount-info">
    <h3 class="product-name-disc">${name}</h3>
    <p class="discount-price">&dollar;${price}</p>
    
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `
    )
    .join('');
  const discountProdList = document.createElement('ul');
  discountProdList.innerHTML = markup;
  const discCardArr = discountProdList.querySelectorAll('.discount-svg');
  discCardArr.forEach(li => {
    li.addEventListener('click', event => {
      const productId = li.dataset.productId;
      if (
        event.target.nodeName === 'BUTTON' ||
        event.target.nodeName === 'svg' ||
        event.target.nodeName === 'use'
      ) {
        const product = results.find(item => item._id === productId);

        if (!isInCart(productId)) {
          addProduct(product);
          updBtn(productId, true);

          return;
        }

        removeProd(productId);
        updBtn(productId, false);
        return;
      }

      openModal(productId);
    });
  });

  return discountProdList;
};
