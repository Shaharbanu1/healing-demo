import { describe, it, expect } from "vitest";

import { applyCoupon, cartTotal, findItem } from "../src/cart.js";

describe("cart", () => {
  it("totals price * quantity", () => {
    expect(cartTotal([{ price: 10, quantity: 2 }, { price: 3, quantity: 1 }])).toBe(23);
  });

  it("returns 0 for an empty cart", () => {
    expect(cartTotal([])).toBe(0);
  });

  it("finds an item by id", () => {
    expect(findItem([{ id: 1 }, { id: 2 }], 2)).toEqual({ id: 2 });
  });

  it("applies a coupon rate", () => {
    expect(applyCoupon(100, { rate: 0.1 })).toBe(90);
  });
});
