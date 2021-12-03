const fetchProducts = async () => {

  // seu código aqui
  //"https://api.mercadolibre.com/sites/MLB/search?q=$QUERY"
  //"https://api.mercadolibre.com/sites/MLB/search?q=computador"
  const items = document.querySelector('.items');
  items.innerHTML += `<span class='loading'>carregando...</span>`;
  let response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  let object = await response.json();
  const loading = document.querySelector('.loading');
  items.removeChild(loading);
  return object.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
