const saveCartItems = (paramTest) => {
  // seu código aqui
  // localStorage.getItem e localStorage.setItem
  let cartsItemsLi = document.querySelectorAll('.cart__item');
  const arrayCartsItemsLi = [];
  if (paramTest) {
    cartsItemsLi = [paramTest];
  }
  cartsItemsLi.forEach((element) => {
    arrayCartsItemsLi.push(`${paramTest ? element : `${element.outerHTML}✄`}`);
  });
  localStorage.setItem('cartItems', arrayCartsItemsLi);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
