const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  //test.todo("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]");
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const direction = 'asc';
    const prodId = sortProductsByPrice(products, direction).map((product) => product.id);
    expect(prodId).toEqual([3, 6, 5, 4, 2, 1]);
  });
  //test.todo('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]');
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const prodId = sortProductsByPrice(products).map((product) => product.id);
    expect(prodId).toEqual([3, 6, 5, 4, 2, 1]);
  });
  //test.todo("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]");
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const direction = 'asc';
    const productsByOrder = products.filter(({ id }) => [1, 3, 4].includes(id));
    const prodId = sortProductsByPrice(productsByOrder, direction).map((product) => product.id);
    expect(prodId).toEqual([3, 4, 1]);
  });
  //test.todo("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]");
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const direction = 'desc';
    const prodId = sortProductsByPrice(products, direction).map((product) => product.id);
    expect(prodId).toEqual([1, 2, 4, 5, 6, 3]);
  });
  //test.todo("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]");
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const direction = 'desc';
    const productsByOrder = products.filter(({ id }) => [3, 1, 4].includes(id));
    const prodId = sortProductsByPrice(productsByOrder, direction).map((product) => product.id);
    expect(prodId).toEqual([1, 4, 3]);
  });
  //test.todo("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]");
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const direction = 'desc';
    const productsByOrder = products.filter(({ id }) => [5, 2, 6].includes(id));
    const prodId = sortProductsByPrice(productsByOrder, direction).map((product) => product.id);
    expect(prodId).toEqual([2, 5, 6]);
  });
  test.todo("'asc' не меняет исходный массив [1, 3, 4]");
  test.todo("'desc' не меняет исходный массив [1, 3, 4]");
  test.todo('направление по умолчанию не меняет исходный массив всех товаров');
});
