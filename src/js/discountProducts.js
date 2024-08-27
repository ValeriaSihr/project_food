import { getDiscountProducts } from './api';
import { updBtn } from './cards';
import { addProduct, isInCart, removeProd } from './cart';
import { openModal } from './modal';

export const discountProdMarkup = async () => {
  const results = await getDiscountProducts();
  const markup = results
    .map(
      ({ img, name, price, _id }) =>
        `<li class="discount-list-card" data-product-id="${_id}">
        <div lass="discount-svg">
        <svg class="disc-icon-svg" width="60" height="60">
  <use href="../img/icons.svg#discount"></use>
</svg>
</div>
  <div class="discount-card-img"><img class="discount-img" src="${img}" alt="${name}" /></div>
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
  discountProdList.classList.add('discount-list');
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
