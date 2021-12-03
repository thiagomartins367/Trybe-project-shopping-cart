const saveCartItems = (paramTest) => {
  
  // seu código aqui
  // localStorage.getItem e localStorage.setItem
  const cartsItemsLi = document.querySelectorAll('.cart__item');
  const arrayCartsItemsLi = [];
  cartsItemsLi.forEach((element) => {
    arrayCartsItemsLi.push(`${element.outerHTML}✄`);
  });
  if (paramTest === undefined) {
    localStorage.clear();
    localStorage.setItem('cartItems', arrayCartsItemsLi);
  } else {
    localStorage.setItem('cartItems', paramTest);
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
