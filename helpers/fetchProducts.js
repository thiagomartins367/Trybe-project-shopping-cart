const exportsFetchProducts = {};

const fetchProducts = async (query) => {

  // seu código aqui
  let object;
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  if (query !== undefined) {
    const response = await fetch(url);
    exportsFetchProducts.responseProducts = url;
    object = await response.json();
  } else {
    Error('You must provide an url');
    object = {};
  }
  return object;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
    exportsFetchProducts,
  };
}
