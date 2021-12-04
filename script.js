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

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement(sku, 'span', 'item__sku', sku));
  section.appendChild(createCustomElement(sku, 'span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement(sku, 'button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

// function getSkuFromProductItem(item) {
//   return item.querySelector('span.item__sku').innerText;
// }

let valor = false;
let string = '';
let elementString;
let breakFor = false;
let index1 = 0;
const sumSubtotalForIf = () => {
  if (elementString[index1] === '$' || valor === true) {
    if (elementString[index1] === '<') {
      breakFor = true;
    }
    valor = true;
    string += elementString[index1];
  }
};

const sumSubtotalFor = () => {
  for (index1 = 0; index1 < elementString.length; index1 += 1) {
    sumSubtotalForIf();
    if (breakFor === true) {
      breakFor = false;
      break;
    }
  }
  index1 = 0;
};

const sumSubtotal = () => {
  const cartItemSumSubTotal = document.querySelectorAll('.cart__item');
  const totalPrice = document.querySelector('.total-price');
  let subTotal = 0;
  cartItemSumSubTotal.forEach((element) => {
    elementString = element.outerHTML;
    sumSubtotalFor();
    string = string.replace('$', '');
    string = string.replace('<', '');
    subTotal += parseFloat(string);
    string = '';
    valor = false;
  });
  subTotal = Math.round(subTotal * 100) / 100;
  totalPrice.innerText = `${subTotal}`;
};

function cartItemClickListener(event) {
  // coloque seu código aqui
  event.target.remove();
  localStorage.clear();
  saveCartItems();
  sumSubtotal();
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.classList.add(sku);
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const removeProductFromCart = () => {
  const cartsItemsLi = document.querySelectorAll('.cart__item');
  cartsItemsLi.forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
};

const funcCartItems = async () => {
  const cartItems = document.querySelector('.cart__items');
  const itemButton = document.querySelectorAll('.item__add');
  itemButton.forEach((element) => {
    element.addEventListener('click', async (event) => {
      const cartSubtotal = document.querySelector('.cart-subtotal');
      cartSubtotal.innerHTML += '<span class="loading">carregando...</span>';
      const itemObject = await fetchItem(event.target.classList[1]);
      const loading = document.querySelector('.loading');
      cartSubtotal.removeChild(loading);
      cartItems.appendChild(createCartItemElement(itemObject));
      localStorage.clear();
      saveCartItems();
      sumSubtotal();
    });
  });
  getSavedCartItems();
  sumSubtotal();
  removeProductFromCart();
};

const cleanShoppingCart = () => {
  const emptyCart = document.querySelector('.empty-cart');
  const cartItems = document.querySelector('.cart__items');
  emptyCart.addEventListener('click', () => {
    cartItems.innerText = '';
    localStorage.clear();
    saveCartItems();
    sumSubtotal();
  });
};

window.onload = () => {
  const addChildrenSectionItems = async () => {
    const items = document.querySelector('.items');
    items.innerHTML += '<span class="loading">carregando...</span>';
    const requisitionObject = await fetchProducts('computador');
    const loading = document.querySelector('.loading');
    items.removeChild(loading);
    requisitionObject.results.forEach((element) => {
      items.appendChild(createProductItemElement(element));
    });
    funcCartItems();
    cleanShoppingCart();
  };
  addChildrenSectionItems();
};