import { addProduct, getCart, removeAllProducts, removeOneProd } from './cart';

const cartTitle = document.querySelector('.prod-cart-title');
const cartListEl = document.querySelector('[data-cart-list]');
const cartEmptyEl = document.querySelector('[data-cart-empty]');
const cartSummaryEl = document.querySelector('[data-cart-summary]');
const cartTotalEl = document.querySelector('[data-cart-total]');
const deleteAllBtn = document.querySelector('.delete-all-btn');

let listenersAttached = false;

const buildCartViewModel = () => {
  const cart = getCart();
  const map = new Map();

  cart.forEach(product => {
    if (!product || !product._id) {
      return;
    }

    const id = product._id;
    const price = Number(product.price) || 0;

    if (!map.has(id)) {
      map.set(id, {
        product,
        quantity: 1,
        subtotal: price,
      });
      return;
    }

    const item = map.get(id);
    item.quantity += 1;
    item.subtotal += price;
  });

  const items = Array.from(map.values());
  const total = items.reduce((sum, item) => sum + item.subtotal, 0);

  return { items, total };
};

const fullCartContent = () => {
  if (!cartListEl || !cartEmptyEl || !cartSummaryEl || !cartTotalEl) {
    return;
  }

  const { items, total } = buildCartViewModel();

  cartEmptyEl.style.display = 'none';
  cartSummaryEl.style.display = '';

  const markup = items
    .map(({ product, quantity, subtotal }) => {
      const { img, name, price, _id } = product;

      return `<div class="cart-item" data-cart-item data-product-id="${_id}">
        <div class="cart-item-main">
          <div class="cart-item-img-wrapper">
            <img class="cart-item-img" src="${img}" alt="${name}" />
          </div>
          <div class="cart-item-info">
            <h3 class="cart-item-name">${name}</h3>
            <p class="cart-item-price">&dollar;${price}</p>
          </div>
        </div>
        <div class="cart-item-controls">
          <button
            type="button"
            class="cart-item-btn cart-item-btn-dec"
            data-cart-decrease
          >
            -
          </button>
          <span class="cart-item-qty">${quantity}</span>
          <button
            type="button"
            class="cart-item-btn cart-item-btn-inc"
            data-cart-increase
          >
            +
          </button>
          <p class="cart-item-subtotal">
            &dollar;${subtotal.toFixed(2)}
          </p>
        </div>
      </div>`;
    })
    .join('');

  cartListEl.innerHTML = markup;
  cartTotalEl.textContent = `$${total.toFixed(2)}`;
};

const emptyCartContent = () => {
  if (!cartListEl || !cartEmptyEl || !cartSummaryEl || !cartTotalEl) {
    return;
  }

  cartListEl.innerHTML = '';
  cartEmptyEl.style.display = '';
  cartSummaryEl.style.display = 'none';
  cartTotalEl.textContent = '$0.00';
};

const onCartListClick = event => {
  const button = event.target.closest('button');

  if (!button || !cartListEl || !cartListEl.contains(button)) {
    return;
  }

  const itemEl = button.closest('[data-cart-item]');

  if (!itemEl) {
    return;
  }

  const productId = itemEl.dataset.productId;

  if (!productId) {
    return;
  }

  if (button.hasAttribute('data-cart-increase')) {
    const cart = getCart();
    const product = cart.find(prod => prod && prod._id === productId);

    if (product) {
      addProduct(product);
      renderCart();
    }

    return;
  }

  if (button.hasAttribute('data-cart-decrease')) {
    removeOneProd(productId);
    renderCart();
  }
};

const attachListeners = () => {
  if (listenersAttached) {
    return;
  }

  listenersAttached = true;

  if (deleteAllBtn) {
    deleteAllBtn.addEventListener('click', () => {
      removeAllProducts();
      renderCart();
    });
  }

  if (cartListEl) {
    cartListEl.addEventListener('click', onCartListClick);
  }
};

export function renderCart() {
  const cart = getCart();

  if (cartTitle) {
    cartTitle.textContent = `CART (${cart.length})`;
  }

  attachListeners();
  cart.length > 0 ? fullCartContent() : emptyCartContent();
}

/*
import { addProduct, getCart, removeAllProducts, removeOneProd } from './cart';

const cartTitle = document.querySelector('.prod-cart-title');
const cartListEl = document.querySelector('[data-cart-list]');
const cartEmptyEl = document.querySelector('[data-cart-empty]');
const cartSummaryEl = document.querySelector('[data-cart-summary]');
const cartTotalEl = document.querySelector('[data-cart-total]');
const deleteAllBtn = document.querySelector('.delete-all-btn');

let listenersAttached = false;

const buildCartViewModel = () => {
  const cart = getCart();
  const map = new Map();

  cart.forEach(product => {
    if (!product || !product._id) {
      return;
    }

    const id = product._id;
    const price = Number(product.price) || 0;

    if (!map.has(id)) {
      map.set(id, {
        product,
        quantity: 1,
        subtotal: price,
      });
      return;
    }

    const item = map.get(id);
    item.quantity += 1;
    item.subtotal += price;
  });

  const items = Array.from(map.values());
  const total = items.reduce((sum, item) => sum + item.subtotal, 0);

  return { items, total };
};

const fullCartContent = () => {
  if (!cartListEl || !cartEmptyEl || !cartSummaryEl || !cartTotalEl) {
    return;
  }

  const { items, total } = buildCartViewModel();

  cartEmptyEl.style.display = 'none';
  cartSummaryEl.style.display = '';

  const markup = items
    .map(({ product, quantity, subtotal }) => {
      const { img, name, price, _id } = product;

      return `<div class="cart-item" data-cart-item data-product-id="${_id}">
        <div class="cart-item-main">
          <div class="cart-item-img-wrapper">
            <img class="cart-item-img" src="${img}" alt="${name}" />
          </div>
          <div class="cart-item-info">
            <h3 class="cart-item-name">${name}</h3>
            <p class="cart-item-price">&dollar;${price}</p>
          </div>
        </div>
        <div class="cart-item-controls">
          <button
            type="button"
            class="cart-item-btn cart-item-btn-dec"
            data-cart-decrease
          >
            -
          </button>
          <span class="cart-item-qty">${quantity}</span>
          <button
            type="button"
            class="cart-item-btn cart-item-btn-inc"
            data-cart-increase
          >
            +
          </button>
          <p class="cart-item-subtotal">
            &dollar;${subtotal.toFixed(2)}
          </p>
        </div>
      </div>`;
    })
    .join('');

  cartListEl.innerHTML = markup;
  cartTotalEl.textContent = `$${total.toFixed(2)}`;
};

const emptyCartContent = () => {
  if (!cartListEl || !cartEmptyEl || !cartSummaryEl || !cartTotalEl) {
    return;
  }

  cartListEl.innerHTML = '';
  cartEmptyEl.style.display = '';
  cartSummaryEl.style.display = 'none';
  cartTotalEl.textContent = '$0.00';
};

const onCartListClick = event => {
  const button = event.target.closest('button');

  if (!button || !cartListEl || !cartListEl.contains(button)) {
    return;
  }

  const itemEl = button.closest('[data-cart-item]');

  if (!itemEl) {
    return;
  }

  const productId = itemEl.dataset.productId;

  if (!productId) {
    return;
  }

  if (button.hasAttribute('data-cart-increase')) {
    const cart = getCart();
    const product = cart.find(prod => prod && prod._id === productId);

    if (product) {
      addProduct(product);
      renderCart();
    }

    return;
  }

  if (button.hasAttribute('data-cart-decrease')) {
    removeOneProd(productId);
    renderCart();
  }
};

const attachListeners = () => {
  if (listenersAttached) {
    return;
  }

  listenersAttached = true;

  if (deleteAllBtn) {
    deleteAllBtn.addEventListener('click', () => {
      removeAllProducts();
      renderCart();
    });
  }

  if (cartListEl) {
    cartListEl.addEventListener('click', onCartListClick);
  }
};

export function renderCart() {
  const cart = getCart();

  if (cartTitle) {
    cartTitle.textContent = `CART (${cart.length})`;
  }

  attachListeners();
  cart.length > 0 ? fullCartContent() : emptyCartContent();
}

import { getCart } from './cart';

const cartTitle = document.querySelector('.prod-cart-title');

function fullCartContent() {
  console.log('full');
}

function emptyCartContent() {
  console.log('empty');
}

export function renderCart() {
  const cart = getCart();
  cartTitle.textContent = `CART (${cart.length})`;
  cart.length > 0 ? fullCartContent() : emptyCartContent();
}

// const createCartContent = product => {
//   const {
//     category,
//     img,
//     is10PercentOff,
//     name,
//     desc,
//     popularity,
//     price,
//     size,
//     _id,
//   } = product;

//   const picture = document.createElement('img');
//   picture.src = img;
//   picture.alt = name;
//   console.log(picture);

//   const productCard = document.createElement();
// };
// createCartContent();
*/
