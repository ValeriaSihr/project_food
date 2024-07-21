import { getPopularProducts } from './api';
import { updBtn } from './cards';
import { addProduct, isInCart, removeProd } from './cart';
import { openModal } from './modal';

export const popularProdMarkup = async () => {
  const results = await getPopularProducts();
  // console.log(results);
  const markup = results
    .map(
      ({
        category,
        img,
        name,
        popularity,
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
