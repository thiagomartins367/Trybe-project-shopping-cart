const saveCartItems = () => {
  
  // seu código aqui
  // localStorage.getItem e localStorage.setItem
  const cartsItemsLi = document.querySelectorAll('.cart__item');
  const arrayCartsItemsLi = [];
  cartsItemsLi.forEach((element) => {
    arrayCartsItemsLi.push(`${element.outerHTML}✄`);
  });
  localStorage.clear();
  localStorage.setItem('cartItems', arrayCartsItemsLi);
};


if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
