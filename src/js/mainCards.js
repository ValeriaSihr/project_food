import { getAllProducts } from './api';
import { updBtn } from './cards';
import { addProduct, isInCart, removeProd } from './cart';
import { openModal } from './modal';

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
        <use href='../img/icons.svg#shopping-cart'
        ></use>
      </svg>
    </button>
  </div>
</li>`;
      }
    )
    .join('');

  const cardList = document.createElement('ul');
  cardList.classList.add('main-cards-list');
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
