require('../mocks/fetchSimulator');
const { fetchProducts, constExports } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  it('Testa se fetchProducts é uma função.', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it(`Testa se fetch foi chamada, passando 'computador' como parâmetro.`, async () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', 
  async () => {
    fetchProducts('computador');
    expect(constExports.responseProducts).toBe('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Testa se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch.', 
  async () => {
    const funcFetchProducts = await fetchProducts('computador');
    expect(funcFetchProducts).toEqual(computadorSearch);
  });

  it(`Testa se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"`, () => {
    try {
      fetchProducts();
    } catch (error) {
      expect(error).toBe('You must provide an url');
    }
  });
});
