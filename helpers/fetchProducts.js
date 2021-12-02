const fetchProducts = async () => {

  // seu código aqui
  //"https://api.mercadolibre.com/sites/MLB/search?q=$QUERY"
  //"https://api.mercadolibre.com/sites/MLB/search?q=computador"
  let response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  let object = await response.json();
  return object.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
