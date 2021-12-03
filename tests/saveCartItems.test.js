const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Testa se, ao executar saveCartItems com o argumento "<ol><li>Item</li></ol>", o método localStorage.setItem é chamado.', () => {
    saveCartItems("<ol><li>Item</li></ol>");
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  const partText1 = 'Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>,';
  const partText2 = 'o método localStorage.setItem é chamado com dois parâmetros, sendo o primeiro';
  const partText3 = '"cartItems" e o segundo sendo o valor passado como argumento para saveCartItems.';
  it(`${partText1} ${partText2} ${partText3}`, () => {
    const param1 = 'cartItems';
    const param2 = '<ol><li>Item</li></ol>';
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith(param1, param2);
  });
});
