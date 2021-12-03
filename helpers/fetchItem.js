const exportsFetchItem = {};

const fetchItem = async (ItemID) => {
  // seu código aqui
  let itemObject;
  if (ItemID !== undefined) {
    const response = await fetch(`https://api.mercadolibre.com/items/${ItemID}`);
    exportsFetchItem.responseItem = `https://api.mercadolibre.com/items/${ItemID}`;
    itemObject = await response.json();
  } else {
    Error('You must provide an url');
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
