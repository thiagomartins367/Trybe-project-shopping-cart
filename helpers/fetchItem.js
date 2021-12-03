const exportsFetchItem = {};

const fetchItem = async (ItemID) => {

  // seu código aqui
  //"https://api.mercadolibre.com/items/$ItemID"
  // Exemplo: "https://api.mercadolibre.com/items/MLB1341706310"
  let itemObject;
  if (ItemID !== undefined) {
    let response = await fetch(`https://api.mercadolibre.com/items/${ItemID}`);
    exportsFetchItem['responseItem'] = `https://api.mercadolibre.com/items/${ItemID}`;
    itemObject = await response.json();
  } else {
    new Error('You must provide an url');
    itemObject = {};
  }
  
  return itemObject;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
    exportsFetchItem,
  };
}
