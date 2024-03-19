export const createContent = product => {
  const { category, img, is10PercentOff, name, desc, popularity, price, size } =
    product;
  const picture = document.createElement('img');
  picture.src = img;
  picture.alt = name;
  picture.classList.add('card-img');
  console.log(product);

  const cost = document.createElement('p');
  cost.innerHTML = is10PercentOff
    ? `<span class="old-price">${(price / 0.9).toFixed(2)}</span> ${price}`
    : price;
  // to make dicsount visible

  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.textContent = 'Add to';
  const cartSvg = document.createElement('svg');
  const useSvg = document.createElement('use');
  useSvg.setAttribute(
    'href',
    '../img/icons.svg#icon-heroicons-solid_shopping-cart'
  );
  // useSvg.href = '../img/icons.svg#icon-heroicons-solid_shopping-cart'; can be used sometimes
  cartSvg.insertAdjacentElement('beforeend', useSvg);
  button.insertAdjacentElement('beforeend', cartSvg);

  const pricingWrapper = document.createElement('div');
  pricingWrapper.insertAdjacentElement('beforeend', cost);
  pricingWrapper.insertAdjacentElement('beforeend', button);

  const title = document.createElement('h3');
  title.textContent = name;

  const description = document.createElement('p');
  description.textContent = desc;

  const categorySpan = document.createElement('span');
  const categoryValueSpan = document.createElement('span');

  categorySpan.textContent = 'Category: ';
  categoryValueSpan.textContent = category.split('_').join(' ');
  categorySpan.classList.add('prod-info');
  categoryValueSpan.classList.add('prod-info-api');

  const prodSize = document.createElement('span');
  const prodValueSize = document.createElement('span');

  prodSize.textContent = 'Size: ';
  prodValueSize.textContent = size;
  prodSize.classList.add('prod-info');
  prodValueSize.classList.add('prod-info-api');

  const prodPopularity = document.createElement('span');
  const popularityValue = document.createElement('span');

  prodPopularity.textContent = 'Popularity: ';
  popularityValue.textContent = popularity;
  prodPopularity.classList.add('prod-info');
  popularityValue.classList.add('prod-info-api');

  const wrapper = document.createElement('div');
  wrapper.insertAdjacentElement('beforeend', picture);
  wrapper.insertAdjacentElement('beforeend', title);
  wrapper.insertAdjacentElement('beforeend', categorySpan);
  wrapper.insertAdjacentElement('beforeend', categoryValueSpan);
  wrapper.insertAdjacentElement('beforeend', prodSize);
  wrapper.insertAdjacentElement('beforeend', prodValueSize);
  wrapper.insertAdjacentElement('beforeend', prodPopularity);
  wrapper.insertAdjacentElement('beforeend', popularityValue);
  wrapper.insertAdjacentElement('beforeend', description);
  wrapper.insertAdjacentElement('beforeend', pricingWrapper);

  return wrapper;
};
