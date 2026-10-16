const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  //test.todo("'Наушники' возвращает товар с ID 1");
  test("'Наушники' возвращает товар с ID 1", () => {
    const query = 'Наушники';
    const prodId = searchProducts(products, query).map((product) => product.id);
    expect(prodId).toEqual([1]);
  });
  //test.todo("'Чистый код' возвращает товар с ID 6");
  test("'Чистый код' возвращает товар с ID 6", () => {
    const query = 'Чистый код';
    const prodId = searchProducts(products, query).map((product) => product.id);
    expect(prodId).toEqual([6]);
  });
  //test.todo("'Настольная лампа' возвращает товар с ID 4");
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const query = 'Настольная лампа';
    const prodId = searchProducts(products, query).map((product) => product.id);
    expect(prodId).toEqual([4]);
  });
  //test.todo("'javascript' возвращает товар с ID 3");
  test("'javascript' возвращает товар с ID 3", () => {
    const query = 'javascript';
    const prodId = searchProducts(products, query).map((product) => product.id);
    expect(prodId).toEqual([3]);
  });
  //test.todo("'ЧЕХОЛ' возвращает товар с ID 5");
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const query = 'ЧЕХОЛ';
    const prodId = searchProducts(products, query).map((product) => product.id);
    expect(prodId).toEqual([5]);
  });
  //test.todo("'наушники' возвращает товар с ID 1");
  test("'наушники' возвращает товар с ID 1", () => {
    const query = 'наушники';
    const prodId = searchProducts(products, query).map((product) => product.id);
    expect(prodId).toEqual([1]);
  });
  //test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const query = '';
    const prodId = searchProducts(products, query).map((product) => product.id);
    expect(prodId).toEqual([1, 2, 3, 4, 5, 6]);
  });
  //test.todo("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const query = '  ';
    const prodId = searchProducts(products, query).map((product) => product.id);
    expect(prodId).toEqual([1, 2, 3, 4, 5, 6]);
  });
  //test.todo("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const query = '\t\n';
    const prodId = searchProducts(products, query).map((product) => product.id);
    expect(prodId).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
