# healing-demo

Minimal modern JavaScript module (ESM + Vitest) used to exercise the
Self-Healing Platform end-to-end on a current Node runtime.

```bash
npm install
npm test
```

`src/cart.js` holds small cart helpers. `applyCoupon` dereferences
`coupon.rate` without guarding against a missing coupon — the kind of latent
runtime error the platform detects from logs, patches, and opens a PR for.
