require('../mocks/fetchSimulator');
const { fetchItem, exportsFetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {

  // implemente seus testes aqui
  // fail('Teste vazio');
  it('Testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Testa se fetch foi chamada, passando "MLB1615760527" como parâmetro.', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', 
  async () => {
    await fetchItem('MLB1615760527');
    expect(exportsFetchItem.responseItem).toBe('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('Testa se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto do arquivo "item.js".', 
  async () => {
    const funcFetchItem = await fetchItem('MLB1615760527');
    expect(funcFetchItem).toEqual(item);
  });

  it(`Testa se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"`, () => {
    try {
      fetchItem();
    } catch (error) {
      expect(error).toBe('You must provide an url');
    }
  });
});
