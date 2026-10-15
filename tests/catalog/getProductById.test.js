const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  //test.todo('ID 1 возвращает products[0]');
  test('ID 1 возвращает products[0]', () => {
    const id = 1;
    const prodId = getProductById(products, id);
    expect(prodId).toEqual(products[0]);
  });
  //test.todo('ID 4 возвращает products[3]');
  test('ID 4 возвращает products[3]', () => {
    const id = 4;
    const prodId = getProductById(products, id);
    expect(prodId).toEqual(products[3]);
  });
  //test.todo('ID 6 возвращает products[5]');
  test('ID 6 возвращает products[5]', () => {
    const id = 6;
    const prodId = getProductById(products, id);
    expect(prodId).toEqual(products[5]);
  });
  //test.todo('ID 0 возвращает null');
  test('ID 0 возвращает null', () => {
    const id = 0;
    const prodId = getProductById(products, id);
    expect(prodId).toEqual(null);
  });
  //test.todo('ID 999 возвращает null');
  test('ID 999 возвращает null', () => {
    const id = 999;
    const prodId = getProductById(products, id);
    expect(prodId).toEqual(null);
  });
  //test.todo('ID -1 возвращает null');
  test('ID -1 возвращает null', () => {
    const id = -1;
    const prodId = getProductById(products, id);
    expect(prodId).toEqual(null);
  });
  //test.todo("строковый ID '1' возвращает null");
  test("строковый ID '1' возвращает null", () => {
    const id = '1';
    const prodId = getProductById(products, id);
    expect(prodId).toEqual(null);
  });
  //test.todo('ID undefined возвращает null');
  test('ID undefined возвращает null', () => {
    const id = undefined;
    const prodId = getProductById(products, id);
    expect(prodId).toEqual(null);
  });
  //test.todo('ID NaN возвращает null');
  test('ID NaN возвращает null', () => {
    const id = NaN;
    const prodId = getProductById(products, id);
    expect(prodId).toEqual(null);
  });
});
