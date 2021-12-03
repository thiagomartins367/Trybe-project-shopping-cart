const fetchItem = async (ItemID) => {

  // seu código aqui
  //"https://api.mercadolibre.com/items/$ItemID"
  // Exemplo: "https://api.mercadolibre.com/items/MLB1341706310"
  const cartSubtotal = document.querySelector('.cart-subtotal');
  cartSubtotal.innerHTML += `<span class='loading'>carregando...</span>`;
  const loading = document.querySelector('.loading');
  let response = await fetch(`https://api.mercadolibre.com/items/${ItemID}`);
  let itemObject = await response.json();
  cartSubtotal.removeChild(loading);
  return itemObject;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
