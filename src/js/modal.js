import { getProdById } from './api';
import { createContent } from './modalcontent';

const modal = document.querySelector('[data-modal]');
const modalWindow = document.querySelector('[data-modal-window]');
const btnClose = document.querySelector('.close-modal');

let wrapper;

const closeModal = () => {
  modal.classList.add('is-hidden');
  wrapper.remove();
};

const backdropClose = event => {
  if (event.currentTarget !== event.target) {
    return;
  }
  closeModal();
};

btnClose.addEventListener('click', closeModal);
modal.addEventListener('click', backdropClose);

export const openModal = async id => {
  modal.classList.remove('is-hidden');

  const product = await getProdById(id);

  wrapper = createContent(product);

  modalWindow.insertAdjacentElement('beforeend', wrapper);
};
