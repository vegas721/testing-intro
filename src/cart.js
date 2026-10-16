function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity === 0) {
    throw new RangeError;
  }
  
  if (quantity > product.stock) {
      throw new RangeError(`${product.name} в наличии на складе ${product.stock} шт`);
  }

  const cartItem = cart.find((p) => p.id === product.id);

  if (cartItem) {
    const currentQuantity = cartItem.quantity + quantity;
    if (currentQuantity > cartItem.stock) {
      throw new RangeError(`${product.name} в наличии на складе ${product.stock} шт`);
    }
    cart.splice(cart.indexOf(cartItem), 1, { id: product.id, name: product.name, price: product.price, stock: product.stock, quantity: currentQuantity });
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, stock: product.stock, quantity: quantity });
  }

  return cart;
}
function changeQuantity(cart, id, quantity) {
  if (quantity === 0) {
    throw new RangeError;
  }
  
  const cartItem = cart.find((p) => p.id === id);

  if (!cartItem) return cart;

  if (quantity > cartItem.stock) {
    throw new RangeError(`${cartItem.name} в наличии на складе ${cartItem.stock} шт`);
  } else {
    cartItem.quantity = quantity;
  }

  return cart;
}
function removeFromCart(cart, id) {
  return cart.filter((p) => p.id !== id);
}
function calculateCartSubtotal(cart) {
  let subTotal = 0;
  if (!cart) {
    return subTotal;
  }
  for (let item of cart) {
    subTotal += item.price * item.quantity;
  }
  
  return subTotal;
}
function calculateOrderTotal(cart, promoInput) {
  let discount = 0;
  let total = 0;
  let delivery = 0;

  total = calculateCartSubtotal(cart);

  total < 50000 ? delivery = 30000 : delivery = 0;
  
  promoInput === 'SAVE10' && total >= 20000 ? discount = total * 0.1 : discount = 0;

  total = total + delivery - discount;

  return { subtotal: calculateCartSubtotal(cart), discount: discount, delivery: delivery, total: total }
}

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
