import { getAllProducts } from './api';

export const mainCardsMarkup = async () => {
  const { results } = await getAllProducts();

  const markup = results
    .map(
      ({ category, img, is10PercentOff, name, popularity, price, size, _id }) =>
        `<li>
  <div class="card-img"><img src="${img}" alt="${name}" /></div>
  <div class="description">
    <h3>${name}</h3>
    
      <span>Category: </span><span>${category.split('_').join(' ')}</span>
      <span>Size: </span><span>${size}</span>
      <span>Popularity: </span><span>${popularity}</span>
    
  </div>
  <div class="to-cart">
    <p>${price}</p>
    <button class="cart-btn" type="button">
    <svg class="cart-svg" width="18" height="18">
    <use href="../img/icons.svg#icon-heroicons-solid_shopping-cart"></use></svg>
    </button>
  </div>
</li>
  `
    )
    .join('');

  const cardList = document.createElement('ul');
  // cardList.insertAdjacentHTML('beforeend', markup);
  cardList.innerHTML = markup;

  return cardList;
};
