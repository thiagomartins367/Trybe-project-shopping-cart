function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(sku, element, className, innerText) {
  const e = document.createElement(element);
  
  if (element === 'button') {
    e.className = className;
    e.classList.add(sku);
  } else {
    e.className = className;
  }
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id:sku, title:name, thumbnail:image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement(sku, 'span', 'item__sku', sku));
  section.appendChild(createCustomElement(sku, 'span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement(sku, 'button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {

  // coloque seu código aqui
  event.target.remove();
  saveCartItems();
}

function createCartItemElement({ id:sku, title:name, price:salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.classList.add(sku);
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

window.onload = () => {
  const addChildrenSectionItems = async () => {
    const items = document.querySelector('.items');
    const results = await fetchProducts();
    results.forEach(element => {
      items.appendChild(createProductItemElement(element));
    });
    funcCartItems();
  };
  
  const funcCartItems = async () => {
    const cartItems = document.querySelector('.cart__items');
    const itemButton = document.querySelectorAll('.item__add');

    itemButton.forEach((element) => {
      element.addEventListener('click', async (event) => {
        const itemObject = await fetchItem(event.target.classList[1]);
        cartItems.appendChild(createCartItemElement(itemObject));
        saveCartItems();
      });
    });
    getSavedCartItems();
    removeProductFromCart();
  };

  const removeProductFromCart = () => {
    const cartsItemsLi = document.querySelectorAll('.cart__item');
    cartsItemsLi.forEach((element) => {
      element.addEventListener('click', cartItemClickListener);
    });
  }
  addChildrenSectionItems();
};