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
