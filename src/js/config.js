const _envLimit =
  (typeof import.meta !== 'undefined' &&
    import.meta.env &&
    import.meta.env.VITE_PRODUCTS_LIMIT) ||
  (typeof process !== 'undefined' &&
    process.env &&
    process.env.PRODUCTS_LIMIT) ||
  (typeof window !== 'undefined' &&
    window.APP_CONFIG &&
    window.APP_CONFIG.ALL_PRODUCTS_LIMIT);

const parsed = Number(_envLimit);
export const ALL_PRODUCTS_LIMIT = Number.isFinite(parsed) ? parsed : 1000;
