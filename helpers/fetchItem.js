const fetchItem = async (ItemID) => {

  // seu código aqui
  //"https://api.mercadolibre.com/items/$ItemID"
  // Exemplo: "https://api.mercadolibre.com/items/MLB1341706310"
  let response = await fetch(`https://api.mercadolibre.com/items/${ItemID}`);
  let itemObject = await response.json();
  return itemObject;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
