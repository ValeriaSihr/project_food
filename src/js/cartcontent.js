import {
  addProduct,
  getCart,
  getCartCount,
  removeAllProducts,
  removeOneProduct,
  removeProd,
} from './cart';

const cartTitle = document.querySelector('.prod-cart-title');
const cartContent = document.querySelector('.cart-content');
const cartHeaderSpan = document.querySelector('.name-cart');

const groupCartItems = cart => {
  const map = new Map();

  cart.forEach(product => {
    const existing = map.get(product._id);

    if (existing) {
      existing.quantity += 1;
      return;
    }

    map.set(product._id, { product, quantity: 1 });
  });

  return Array.from(map.values());
};

const updateCartTitle = count => {
  if (!cartTitle) return;
  cartTitle.textContent = `CART (${count})`;
};

export const updateCartHeader = (count = getCartCount()) => {
  if (!cartHeaderSpan) return;
  cartHeaderSpan.textContent = `Cart (${count})`;
};

const renderEmptyCart = () => {
  if (!cartContent) return;
  cartContent.innerHTML = `
    <div class="empty-cart">
      <img
        class="empty-cart-image"
        src="../img/yellow_shopping_basket.png"
        alt="Empty cart"
      />
      <p class="empty-cart-title">Your backet is <span>empty...</span></p>
      <p class="empty-cart-text">
        Go to the main page to select your favorite products and add them to the cart.
      </p>
    </div>
  `;
};

const renderFullCart = cart => {
  if (!cartContent) return;

  const groupedItems = groupCartItems(cart);
  cartContent.innerHTML = '';

  const list = document.createElement('ul');
  list.classList.add('cart-list');

  groupedItems.forEach(({ product, quantity }) => {
    const itemTotal = (Number(product.price) * quantity).toFixed(2);
    const li = document.createElement('li');
    li.classList.add('cart-item');
    li.dataset.productId = product._id;

    li.innerHTML = `
      <div class="cart-item-main">
        <div class="cart-item-info">
          <img class="cart-item-image" src="${product.img}" alt="${product.name}" />
          <div class="cart-item-text">
            <h3 class="cart-item-name">${product.name}</h3>
            <p class="cart-item-price">&dollar;${product.price}</p>
          </div>
        </div>
        <div class="cart-item-controls">
          <button type="button" class="cart-item-decrease">-</button>
          <span class="cart-item-quantity">${quantity}</span>
          <button type="button" class="cart-item-increase">+</button>
          <span class="cart-item-total">&dollar;${itemTotal}</span>
          <button type="button" class="cart-item-remove">x</button>
        </div>
      </div>
    `;

    list.appendChild(li);
  });

  cartContent.appendChild(list);

  const summary = document.createElement('div');
  summary.classList.add('cart-summary');
  const totalAmount = cart
    .reduce((sum, item) => sum + Number(item.price), 0)
    .toFixed(2);

  summary.innerHTML = `
    <h2 class="cart-summary-title">Your order</h2>
    <div class="cart-summary-row">
      <h3>Total</h3>
      <p><span>Sum: </span>&dollar;${totalAmount}</p>
    </div>
    <button type="button" class="cart-delete-all">Delete all</button>
  `;

  cartContent.appendChild(summary);

  list.addEventListener('click', event => {
    const item = event.target.closest('.cart-item');

    if (!item) return;

    const id = item.dataset.productId;
    const groupedItem = groupedItems.find(
      ({ product: { _id } }) => _id === id
    );

    if (!groupedItem) return;

    if (event.target.classList.contains('cart-item-increase')) {
      addProduct(groupedItem.product);
      renderCart();
      return;
    }

    if (event.target.classList.contains('cart-item-decrease')) {
      removeOneProduct(id);
      renderCart();
      return;
    }

    if (event.target.classList.contains('cart-item-remove')) {
      removeProd(id);
      renderCart();
    }
  });

  const deleteAllBtn = summary.querySelector('.cart-delete-all');

  if (deleteAllBtn) {
    deleteAllBtn.addEventListener('click', () => {
      removeAllProducts();
      renderCart();
    });
  }
};

export function renderCart() {
  const cart = getCart();
  const count = cart.length;

  updateCartTitle(count);
  updateCartHeader(count);

  if (!cartContent) return;

  if (count === 0) {
    renderEmptyCart();
    return;
  }

  renderFullCart(cart);
}

updateCartHeader();

if (typeof window !== 'undefined') {
  window.addEventListener('cart-updated', event => {
    const cart = event.detail?.cart;

    if (!Array.isArray(cart)) {
      updateCartHeader();
      return;
    }

    const count = cart.length;
    updateCartHeader(count);
  });
}