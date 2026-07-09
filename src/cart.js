export function cartTotal(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function findItem(items, id) {
  return items.find((item) => item.id === id);
}

export function applyCoupon(total, coupon) {
  return total - total * coupon.rate;
}
