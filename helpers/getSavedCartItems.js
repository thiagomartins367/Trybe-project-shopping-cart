const insertDataSaved = (arrayCartsItemsLi) => {
  const cartItems = document.querySelector('.cart__items');
  arrayCartsItemsLi.forEach((element) => {
    cartItems.innerHTML += element;
  });
};

const getSavedCartItems = () => {
  if (localStorage.getItem('cartItems') !== null) {
    let getLocalStorage = localStorage.getItem('cartItems');
    if (getLocalStorage === undefined) {
      getLocalStorage = '<li>$0</li>✄';
    }
    const arrayCartsItemsLi = [];
    let stringItemLi = '';
    for (let index = 0; index < getLocalStorage.length; index += 1) {
      if (getLocalStorage[index] === '✄') {
        arrayCartsItemsLi.push(stringItemLi);
        stringItemLi = '';
        index += 1;
      } else {
        stringItemLi += getLocalStorage[index];
      }
    }
    insertDataSaved(arrayCartsItemsLi);
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
