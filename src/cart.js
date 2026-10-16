function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity === 0 || quantity > product.stock) {
    throw new RangeError;
  }
  const cartItem = cart.find((p) => p.id === product.id);
  if (cartItem) {
    const currentQuantity = cartItem.quantity + quantity;
    if (currentQuantity === 0 || currentQuantity > product.stock) {
      throw new RangeError(`${cartItem.name} в наличии на складе ${product.stock} шт`);
    }
    cart.splice(cart.indexOf(cartItem), 1, { id: product.id, name: product.name, price: product.price, stock: product.stock, quantity: currentQuantity });
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, stock: product.stock, quantity: quantity });
  }
  return cart;
}
function changeQuantity() { return notImplemented(); }
function removeFromCart() { return notImplemented(); }
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
