const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  //test.todo("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = 'all';
    const prodId = filterByCategory(products, category).map((product) => product.id);
    expect(prodId).toEqual([1, 2, 3, 4, 5, 6]);
  });
  //test.todo("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = undefined;
    const prodId = filterByCategory(products, category).map((product) => product.id);
    expect(prodId).toEqual([1, 2, 3, 4, 5, 6]);
  });
  //test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const category = '';
    const prodId = filterByCategory(products, category).map((product) => product.id);
    expect(prodId).toEqual([1, 2, 3, 4, 5, 6]);
  });
  //test.todo("'electronics' возвращает товары с ID [1, 2]");
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const category = 'electronics';
    const prodId = filterByCategory(products, category).map((product) => product.id);
    expect(prodId).toEqual([1, 2]);
  });
  //test.todo("'books' возвращает товары с ID [3, 6]");
  test("'books' возвращает товары с ID [3, 6]", () => {
    const category = 'books';
    const prodId = filterByCategory(products, category).map((product) => product.id);
    expect(prodId).toEqual([3, 6]);
  });
  //test.todo("'home' возвращает товары с ID [4, 5]");
  test("'home' возвращает товары с ID [4, 5]", () => {
    const category = 'home';
    const prodId = filterByCategory(products, category).map((product) => product.id);
    expect(prodId).toEqual([4, 5]);
  });
  //test.todo("'clothes' возвращает пустой массив");
  test("'clothes' возвращает пустой массив", () => {
    const category = 'clothes';
    const prodId = filterByCategory(products, category).map((product) => product.id);
    expect(prodId).toEqual([]);
  });
  //test.todo("'toys' возвращает пустой массив");
  test("'toys' возвращает пустой массив", () => {
    const category = 'toys';
    const prodId = filterByCategory(products, category).map((product) => product.id);
    expect(prodId).toEqual([]);
  });
  //test.todo("'sports' возвращает пустой массив");
  test("'sports' возвращает пустой массив", () => {
    const category = 'sports';
    const prodId = filterByCategory(products, category).map((product) => product.id);
    expect(prodId).toEqual([]);
  });
});
