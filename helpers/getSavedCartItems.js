const insertDataSaved = (arrayCartsItemsLi) => {
  const cartItems = document.querySelector('.cart__items');
  arrayCartsItemsLi.forEach((element) => {
    cartItems.innerHTML += element;
  });
};

let getLocalStorage;
let arrayCartsItemsLi;
let stringItemLi;
const getSavedCartItemsForIf = () => {
  for (let index = 0; index < getLocalStorage.length; index += 1) {
    if (getLocalStorage[index] === '✄') {
      arrayCartsItemsLi.push(stringItemLi);
      stringItemLi = '';
      index += 1;
    } else {
      stringItemLi += getLocalStorage[index];
    }
  }
};

const getSavedCartItems = () => {
  if (localStorage.getItem('cartItems') !== null) {
    getLocalStorage = localStorage.getItem('cartItems');
    if (getLocalStorage === undefined) {
      getLocalStorage = '<li>$0</li>✄';
    }
    arrayCartsItemsLi = [];
    stringItemLi = '';
    getSavedCartItemsForIf();
    insertDataSaved(arrayCartsItemsLi);
  }
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
