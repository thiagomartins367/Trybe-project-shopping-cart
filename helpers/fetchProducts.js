const exportsFetchProducts = {};

const fetchProducts = async (query) => {

  // seu código aqui
  //"https://api.mercadolibre.com/sites/MLB/search?q=$QUERY"
  //"https://api.mercadolibre.com/sites/MLB/search?q=computador"
  let object;
  if (query !== undefined) {
    let response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    exportsFetchProducts['responseProducts'] = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    object = await response.json();
  } else {
    new Error('You must provide an url');
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
