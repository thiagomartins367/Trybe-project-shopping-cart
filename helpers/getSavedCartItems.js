const getSavedCartItems = () => {

  // seu código aqui
  const getLocalStorage =
    localStorage.getItem('cartItems') === null
      ? `<li class='cart__item'></li>✄,`
      : localStorage.getItem('cartItems');
  const arrayCartsItemsLi = [];
  let stringItemLi = '';
  for (let index = 0; index < getLocalStorage.length; index+=1) {
    if (getLocalStorage[index] === '✄') {
      arrayCartsItemsLi.push(stringItemLi);
      stringItemLi = '';
      index +=1;
    } else {
      stringItemLi += getLocalStorage[index];
    }
  }
  console.log('getSavedCartItems: ', arrayCartsItemsLi);
  insertDataSaved(arrayCartsItemsLi);
};

const insertDataSaved = (arrayCartsItemsLi) => {
  const cartItems = document.querySelector('.cart__items');
  arrayCartsItemsLi.forEach(element => {
    cartItems.innerHTML += element;
  });
}

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
